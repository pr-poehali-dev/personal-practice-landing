import json
import os
import smtplib
# redeploy v2
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет письмо на почту Сергея."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {
            "statusCode": 405,
            "headers": cors_headers,
            "body": json.dumps({"error": "Method not allowed"}),
        }

    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Invalid JSON"}),
        }

    name = body.get("name", "").strip()
    contact = body.get("contact", "").strip()
    message = body.get("message", "").strip()

    if not name or not contact or not message:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Missing required fields"}),
        }

    smtp_host = os.environ["SMTP_HOST"]
    smtp_port = int(os.environ["SMTP_PORT"])
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]
    to_email = os.environ["CONTACT_EMAIL"]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта — {name}"
    msg["From"] = smtp_user
    msg["To"] = to_email

    html_body = f"""
    <html>
    <body style="font-family: Georgia, serif; color: #1e1e28; max-width: 560px; margin: 0 auto; padding: 32px;">
      <p style="font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #999; margin-bottom: 24px;">
        Заявка с сайта
      </p>
      <hr style="border: none; border-top: 1px solid #e0dbd4; margin-bottom: 24px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #888; font-size: 13px; width: 100px;">Имя</td>
          <td style="padding: 10px 0; font-size: 15px;">{name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888; font-size: 13px;">Контакт</td>
          <td style="padding: 10px 0; font-size: 15px;">{contact}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Запрос</td>
          <td style="padding: 10px 0; font-size: 15px; line-height: 1.6;">{message}</td>
        </tr>
      </table>
      <hr style="border: none; border-top: 1px solid #e0dbd4; margin-top: 24px;">
    </body>
    </html>
    """

    msg.attach(MIMEText(html_body, "html", "utf-8"))

    try:
        if smtp_port == 465:
            with smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=15) as server:
                server.login(smtp_user, smtp_password)
                server.sendmail(smtp_user, to_email, msg.as_string())
        else:
            with smtplib.SMTP(smtp_host, smtp_port, timeout=15) as server:
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.sendmail(smtp_user, to_email, msg.as_string())
    except Exception as e:
        print(f"[SMTP ERROR] {type(e).__name__}: {e}")
        return {
            "statusCode": 500,
            "headers": cors_headers,
            "body": json.dumps({"error": f"SMTP error: {type(e).__name__}: {e}"}),
        }

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }
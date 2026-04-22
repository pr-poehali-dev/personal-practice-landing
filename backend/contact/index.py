import json
import os
import urllib.request
import psycopg2


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта, сохраняет в БД и отправляет уведомление в Telegram."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": cors_headers, "body": json.dumps({"error": "Method not allowed"})}

    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return {"statusCode": 400, "headers": cors_headers, "body": json.dumps({"error": "Invalid JSON"})}

    name = body.get("name", "").strip()
    contact = body.get("contact", "").strip()
    message = body.get("message", "").strip()

    if not name or not contact or not message:
        return {"statusCode": 400, "headers": cors_headers, "body": json.dumps({"error": "Missing required fields"})}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO contacts (name, contact, message, telegram_sent) VALUES (%s, %s, %s, %s) RETURNING id",
        (name, contact, message, False)
    )
    row_id = cur.fetchone()[0]
    conn.commit()

    token = os.environ["TELEGRAM_BOT_TOKEN"]
    chat_id = "387846596"

    text = (
        f"📩 *Новая заявка с сайта vodopianov.ru*\n\n"
        f"👤 *Имя:* {name}\n"
        f"📞 *Телефон:* {contact}\n"
        f"💬 *Запрос:* {message}"
    )

    payload = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "Markdown"
    }).encode("utf-8")

    req = urllib.request.Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            resp_body = json.loads(resp.read())
            if resp_body.get("ok"):
                cur.execute("UPDATE contacts SET telegram_sent = TRUE WHERE id = %s", (row_id,))
                conn.commit()
            else:
                print(f"[TG ERROR] {resp_body}")
    except Exception as e:
        print(f"[TG ERROR] {type(e).__name__}: {e}")
    finally:
        cur.close()
        conn.close()

    return {"statusCode": 200, "headers": cors_headers, "body": json.dumps({"ok": True})}

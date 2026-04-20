import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет уведомление в Telegram."""

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
            if not resp_body.get("ok"):
                print(f"[TG ERROR] {resp_body}")
                return {"statusCode": 500, "headers": cors_headers, "body": json.dumps({"error": "Telegram error"})}
    except Exception as e:
        print(f"[TG ERROR] {type(e).__name__}: {e}")
        return {"statusCode": 500, "headers": cors_headers, "body": json.dumps({"error": str(e)})}

    return {"statusCode": 200, "headers": cors_headers, "body": json.dumps({"ok": True})}
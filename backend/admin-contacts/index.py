import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Возвращает список заявок с сайта для страницы администратора."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, X-Admin-Password",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    password = event.get("headers", {}).get("x-admin-password", "")
    if password != os.environ.get("ADMIN_PASSWORD", ""):
        return {"statusCode": 401, "headers": cors_headers, "body": json.dumps({"error": "Unauthorized"})}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "SELECT id, name, contact, message, telegram_sent, created_at FROM contacts ORDER BY created_at DESC"
    )
    rows = cur.fetchall()
    cur.close()
    conn.close()

    contacts = [
        {
            "id": r[0],
            "name": r[1],
            "contact": r[2],
            "message": r[3],
            "telegram_sent": r[4],
            "created_at": r[5].isoformat(),
        }
        for r in rows
    ]

    return {"statusCode": 200, "headers": cors_headers, "body": json.dumps({"contacts": contacts})}

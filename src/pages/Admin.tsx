import { useState } from "react";
import func2url from "../../func2url.json";

interface Contact {
  id: number;
  name: string;
  contact: string;
  message: string;
  telegram_sent: boolean;
  created_at: string;
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchContacts = async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(func2url["admin-contacts"], {
        headers: { "x-admin-password": pwd },
      });
      if (res.status === 401) {
        setError("Неверный пароль");
        setLoading(false);
        return;
      }
      const data = await res.json();
      const parsed = typeof data === "string" ? JSON.parse(data) : data;
      setContacts(parsed.contacts || []);
      setAuthed(true);
    } catch {
      setError("Ошибка соединения");
    }
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchContacts(password);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "hsl(40,30%,97%)" }}>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-xs">
          <p className="font-cormorant text-2xl text-center" style={{ color: "hsl(220,12%,16%)" }}>
            Администратор
          </p>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="field-input"
            autoFocus
          />
          {error && <p className="text-xs font-golos text-center" style={{ color: "#b03030" }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="font-golos text-xs tracking-[0.2em] uppercase px-8 py-3 transition-opacity hover:opacity-70"
            style={{ backgroundColor: "hsl(220,12%,16%)", color: "hsl(40,30%,97%)" }}
          >
            {loading ? "Вход..." : "Войти"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 md:px-12" style={{ backgroundColor: "hsl(40,30%,97%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="font-cormorant text-3xl" style={{ color: "hsl(220,12%,16%)" }}>
            Заявки с сайта
          </p>
          <button
            onClick={() => fetchContacts(password)}
            className="font-golos text-xs tracking-[0.15em] uppercase px-5 py-2 transition-opacity hover:opacity-70"
            style={{ backgroundColor: "hsl(220,12%,16%)", color: "hsl(40,30%,97%)" }}
          >
            Обновить
          </button>
        </div>

        {contacts.length === 0 ? (
          <p className="font-golos text-sm" style={{ color: "hsl(220,10%,50%)" }}>Заявок пока нет</p>
        ) : (
          <div className="flex flex-col gap-4">
            {contacts.map((c) => (
              <div
                key={c.id}
                className="border p-5 md:p-6 rounded"
                style={{ borderColor: "hsl(40,20%,85%)", backgroundColor: "#fff" }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <p className="font-golos font-medium text-sm" style={{ color: "hsl(220,12%,16%)" }}>{c.name}</p>
                    <p className="font-golos text-sm mt-0.5" style={{ color: "hsl(220,10%,45%)" }}>{c.contact}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <p className="font-golos text-xs" style={{ color: "hsl(220,10%,60%)" }}>{formatDate(c.created_at)}</p>
                    <span
                      className="font-golos text-xs px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: c.telegram_sent ? "hsl(140,40%,90%)" : "hsl(30,60%,90%)",
                        color: c.telegram_sent ? "hsl(140,40%,30%)" : "hsl(30,60%,30%)",
                      }}
                    >
                      {c.telegram_sent ? "Telegram ✓" : "Telegram ✗"}
                    </span>
                  </div>
                </div>
                <p className="font-golos text-sm leading-relaxed" style={{ color: "hsl(220,12%,25%)" }}>{c.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

CREATE TABLE t_p19341628_personal_practice_la.contacts (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    contact TEXT NOT NULL,
    message TEXT NOT NULL,
    telegram_sent BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
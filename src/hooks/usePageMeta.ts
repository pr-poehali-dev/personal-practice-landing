import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

export function usePageMeta({ title, description, keywords }: PageMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("keywords", keywords);

    return () => {
      document.title = "Сергей Водопьянов — Персональная практика";
    };
  }, [title, description, keywords]);
}

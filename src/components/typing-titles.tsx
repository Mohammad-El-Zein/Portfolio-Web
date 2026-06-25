"use client";

import { useEffect, useState } from "react";

const TITLES = ["Junior Software Engineer", "DevOps Engineer", "AI Engineer"];

export function TypingTitles() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    const speed = deleting ? 40 : 70;

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      const advance = setTimeout(() => {
        setDeleting(false);
        setTitleIndex((i) => (i + 1) % TITLES.length);
      }, 0);
      return () => clearTimeout(advance);
    }

    const step = setTimeout(() => {
      setText((t) =>
        deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
      );
    }, speed);

    return () => clearTimeout(step);
  }, [text, deleting, titleIndex]);

  return (
    <span className="font-mono-accent text-accent">
      {text}
      <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-accent align-middle" style={{ height: "1em" }} />
    </span>
  );
}

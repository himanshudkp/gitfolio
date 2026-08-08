import { useEffect, useRef, useState } from "react";

export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  const visibleRef = useRef(new Set());

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!targets.length) return undefined;

    visibleRef.current = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleRef.current.add(entry.target.id);
          } else {
            visibleRef.current.delete(entry.target.id);
          }
        });

        const current = ids.find((id) => visibleRef.current.has(id));
        if (current) setActive(current);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));

    const handleScrollEdges = () => {
      const scrolledToTop = window.scrollY <= 2;
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (scrolledToTop) setActive(ids[0]);
      else if (scrolledToBottom) setActive(ids[ids.length - 1]);
    };

    window.addEventListener("scroll", handleScrollEdges, { passive: true });
    handleScrollEdges();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollEdges);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return active;
}

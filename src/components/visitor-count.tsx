"use client";

import { useEffect, useState } from "react";

const COUNTER_URL =
  "https://counterapi.com/api/wnyatlas.com/view/home?unique=true";
const SESSION_KEY = "wnyatlas-visitor-counted";

type CounterResponse = {
  value?: number;
};

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let alreadyCounted = false;

    try {
      alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      // The counter still works when browser storage is unavailable.
    }

    const url = alreadyCounted
      ? `${COUNTER_URL}&readOnly=true`
      : COUNTER_URL;

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Visitor count is unavailable.");
        }
        return response.json() as Promise<CounterResponse>;
      })
      .then((data) => {
        if (typeof data.value !== "number") {
          return;
        }

        setCount(data.value);
        if (!alreadyCounted) {
          try {
            sessionStorage.setItem(SESSION_KEY, "true");
          } catch {
            // Storage is optional and does not affect the displayed count.
          }
        }
      })
      .catch(() => {
        // Keep the footer clean if the external counter cannot be reached.
      });

    return () => controller.abort();
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <p className="visitor-count">
      Visitors <span>{new Intl.NumberFormat("en-US").format(count)}</span>
    </p>
  );
}

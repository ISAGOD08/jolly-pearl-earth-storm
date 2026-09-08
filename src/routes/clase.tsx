import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/deck";
import type { DeckMode } from "@/data/slides";

type ClaseSearch = {
  n: number;
  modo: DeckMode;
};

export const Route = createFileRoute("/clase")({
  validateSearch: (raw: Record<string, unknown>): ClaseSearch => {
    const nRaw = raw.n;
    const n =
      typeof nRaw === "number"
        ? nRaw
        : typeof nRaw === "string"
          ? parseInt(nRaw, 10)
          : 1;
    return {
      n: Number.isFinite(n) && n > 0 ? n : 1,
      modo: raw.modo === "60" ? "60" : "90",
    };
  },
  component: ClasePage,
});

function ClasePage() {
  const { n, modo } = Route.useSearch();
  return <Deck initialN={n} modo={modo} />;
}

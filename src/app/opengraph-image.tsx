import { ImageResponse } from "next/og";
import { EVENT } from "@/content/event";
import { formatKilometres } from "@/lib/format";

export const alt =
  "Les Farfadets — 4L Trophy 2027 — 6 000 km, 3 pays, 12 jours";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Pas de police personnalisée : next/font ne livre que du woff2, que le moteur de
   rendu des images Open Graph ne sait pas lire. Seules les couleurs de la charte
   sont reprises. */
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(to bottom, #ff153a 0%, #ff153a 45%, #ff7a36 100%)",
        padding: "72px",
      }}
    >
      <div
        style={{
          color: "#ffffff",
          fontSize: 30,
          letterSpacing: 6,
          fontWeight: 700,
        }}
      >
        4L TROPHY 2027 · DOSSIER DE SPONSORING
      </div>
      <div
        style={{
          color: "#ffffff",
          fontSize: 132,
          fontWeight: 800,
          lineHeight: 1.05,
          marginTop: 16,
        }}
      >
        LES FARFADETS
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
        <div style={{ width: 150, height: 12, backgroundColor: "#ffd251" }} />
        <div style={{ width: 75, height: 12, backgroundColor: "#ffffff" }} />
        <div style={{ width: 45, height: 12, backgroundColor: "#18182b" }} />
      </div>
      <div
        style={{
          color: "#ffffff",
          fontSize: 52,
          fontWeight: 700,
          marginTop: 32,
        }}
      >
        {`${formatKilometres(EVENT.distanceKm)} · 3 pays · ${EVENT.days} jours`}
      </div>
      <div style={{ color: "#ffffff", fontSize: 34, marginTop: 28 }}>
        Romain Poisson et Catalin Stefanescu
      </div>
    </div>,
    size,
  );
}

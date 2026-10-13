import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/* L'équipage n'a pas de logo (fiche projet, §10). En attendant, l'icône d'onglet se
   limite à l'initiale, dans les couleurs de la charte : à remplacer le jour où un
   logo existe. */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff153a",
        color: "#ffffff",
        fontSize: 48,
        fontWeight: 800,
      }}
    >
      F
    </div>,
    size,
  );
}

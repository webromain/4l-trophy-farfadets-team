import { getImageProps } from "next/image";
import { findPhoto } from "@/server/photos";

type PhotoProps = {
  /* Nom du fichier attendu dans `public/photos/`, sans extension. */
  name: string;
  alt: string;
  format?: "landscape" | "portrait";
  /* Largeur affichée, quand elle n'est pas celle du format (attribut `sizes`). */
  sizes?: string;
  /* Ce qui s'affiche tant que la photo n'est pas déposée : un emplacement réservé
     ou un dessin. */
  fallback: React.ReactNode;
};

/* Le cadre fixe les proportions : la photo le remplit et se recadre toute seule,
   quelles que soient ses dimensions. */
const FORMATS = {
  landscape: { frame: "aspect-[3/2] max-h-[34rem]", sizes: "100vw" },
  portrait: {
    frame: "aspect-[3/4]",
    sizes: "(min-width: 40rem) 180px, 100vw",
  },
} as const;

/* Une photo de l'équipage, affichée dès que son fichier existe (server/photos.ts).
   `getImageProps` donne les versions redimensionnées de `next/image` sans son
   attribut `style`, que la CSP à nonce (proxy.ts) bloquerait : la mise en place se
   fait par les classes. */
export default function Photo({
  name,
  alt,
  format = "landscape",
  sizes,
  fallback,
}: PhotoProps) {
  const src = findPhoto(name);
  if (!src) return fallback;

  const { frame, sizes: formatSizes } = FORMATS[format];
  const { props } = getImageProps({
    src,
    alt,
    fill: true,
    sizes: sizes ?? formatSizes,
  });

  return (
    <div
      className={`parallax relative w-full overflow-hidden rounded-panel [--parallax-shift:1.5rem] ${frame}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- les adresses viennent de next/image (getImageProps) */}
      <img
        src={props.src}
        srcSet={props.srcSet}
        sizes={props.sizes}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  );
}

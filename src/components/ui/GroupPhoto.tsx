import Photo from "./Photo";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { findPhoto } from "@/server/photos";

type Portrait = {
  /* Nom du fichier du portrait dans `public/photos/`, sans extension. */
  readonly name: string;
  readonly alt: string;
  /* Libellé de l'emplacement réservé, si ce portrait-là manque. */
  readonly label: string;
};

type GroupPhotoProps = {
  /* Nom du fichier de la photo de groupe dans `public/photos/`, sans extension. */
  name: string;
  alt: string;
  portraits: readonly Portrait[];
  /* Ce qui s'affiche tant qu'il n'y a ni photo de groupe ni portrait. */
  fallback: React.ReactNode;
};

/* La photo de groupe. Tant qu'elle n'est pas déposée, les portraits de chacun la
   remplacent, côte à côte ; elle reprend sa place dès que son fichier existe. */
export default function GroupPhoto({
  name,
  alt,
  portraits,
  fallback,
}: GroupPhotoProps) {
  if (findPhoto(name))
    return <Photo name={name} alt={alt} fallback={fallback} />;
  if (!portraits.some((portrait) => findPhoto(portrait.name))) return fallback;

  return (
    <div className="grid w-full max-w-2xl grid-cols-2 gap-3 self-start sm:gap-4">
      {portraits.map((portrait) => (
        <Photo
          key={portrait.name}
          name={portrait.name}
          alt={portrait.alt}
          format="portrait"
          sizes="(min-width: 42rem) 21rem, 50vw"
          fallback={
            <PhotoPlaceholder
              label={portrait.label}
              caption="Portrait, à fournir"
              format="portrait"
            />
          }
        />
      ))}
    </div>
  );
}

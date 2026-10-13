import { readdirSync } from "node:fs";
import { join } from "node:path";

/* Les photos de l'équipage ne sont pas déclarées dans le code : il suffit de
   déposer un fichier au bon nom dans `public/photos/` pour qu'il s'affiche à la
   place de son emplacement réservé. Les noms attendus sont dans le README. */

const PHOTOS_DIRECTORY = join(process.cwd(), "public", "photos");
const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

/* Adresse publique de la photo `name`, ou `undefined` tant qu'elle n'est pas
   déposée. La casse du fichier est ignorée (`Romain.JPG` convient) et l'adresse
   reprend le nom exact : un serveur Linux, lui, la distingue. */
export function findPhoto(
  name: string,
  directory = PHOTOS_DIRECTORY,
): string | undefined {
  let files: string[];
  try {
    files = readdirSync(directory);
  } catch {
    return undefined;
  }
  for (const extension of EXTENSIONS) {
    const file = files.find(
      (candidate) => candidate.toLowerCase() === `${name}.${extension}`,
    );
    if (file) return `/photos/${file}`;
  }
  return undefined;
}

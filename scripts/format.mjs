// Formate le projet avec Prettier sans jamais le laisser cassé :
//   1. types, lint et tests doivent passer avant de commencer ;
//   2. Prettier contrôle lui-même que le formatage ne change pas le sens du code ;
//   3. les fichiers sont formatés ;
//   4. types, lint et tests sont relancés ;
//   5. au moindre échec, chaque fichier reprend exactement son contenu d'avant.
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const windows = process.platform === "win32";
const run = (command, args, options = {}) =>
  spawnSync(command, args, { encoding: "utf8", shell: windows, ...options });
const prettier = (...args) => run("npx", ["prettier", ...args]);
const check = () =>
  run("npm", ["run", "check"], { stdio: "inherit" }).status === 0;

const files = prettier("--list-different", ".")
  .stdout.split("\n")
  .filter(Boolean);
if (files.length === 0) {
  console.log("Rien à formater.");
  process.exit(0);
}

console.log(
  `${files.length} fichier(s) à formater. Vérification de l'état de départ…`,
);
if (!check()) {
  console.error(
    "\nLe projet ne passe pas la vérification avant formatage : corrigez d'abord, rien n'a été modifié.",
  );
  process.exit(1);
}

const safety = prettier("--debug-check", ...files);
if (safety.status !== 0) {
  console.error(safety.stdout + safety.stderr);
  console.error(
    "Prettier n'est pas certain de préserver le sens du code : rien n'a été modifié.",
  );
  process.exit(1);
}

const backup = new Map(files.map((file) => [file, readFileSync(file)]));
function restore(reason) {
  for (const [file, content] of backup) writeFileSync(file, content);
  console.error(
    `\n${reason} Les ${files.length} fichier(s) ont repris leur contenu d'origine.`,
  );
  process.exit(1);
}

if (prettier("--write", ...files).status !== 0)
  restore("Le formatage a échoué.");

console.log("Formatage fait. Vérification…");
if (!check()) restore("La vérification échoue après formatage.");

console.log(`\n${files.length} fichier(s) formaté(s), vérification réussie.`);

/* Avant chaque commit : les fichiers indexés sont formatés, puis types, lint et
   tests sont relancés. Si une étape échoue, lint-staged remet les fichiers dans
   leur état d'origine et le commit est annulé. */
const quote = (file) => JSON.stringify(file);

const config = {
  "*": (files) => [
    `prettier --write --ignore-unknown ${files.map(quote).join(" ")}`,
    "npm run check",
  ],
};

export default config;

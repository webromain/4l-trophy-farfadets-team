# Image de production du site : build Next.js en sortie « standalone », puis une
# image d'exécution qui ne contient que le serveur, les fichiers statiques et
# public/. Lancement : README, « Démarrer ».

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# Sans les scripts npm : `prepare` lancerait husky, qui n'a rien à faire sans .git.
RUN npm ci --ignore-scripts

FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
USER node
EXPOSE 3000
CMD ["node", "server.js"]

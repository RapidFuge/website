FROM node:lts-alpine AS builder
WORKDIR /app

COPY package.json ./
RUN npm i

COPY . .

RUN npm run build

FROM node:lts-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/.next/static ./.next/static
#COPY --from=builder /app/public ./public

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]

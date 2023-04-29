FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --omit=dev

FROM nginx:alpine
COPY --from=node /app/dist/pokemon-ui /usr/share/nginx/html

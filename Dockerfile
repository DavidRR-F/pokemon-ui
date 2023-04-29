FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --omit=dev

# Stage 2: Set up Nginx to serve the Angular app
FROM nginx:alpine
COPY --from=build /app/dist/pokemon-ui /usr/share/nginx/html
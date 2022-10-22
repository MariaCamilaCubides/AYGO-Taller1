FROM node:16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# etapa de producción
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/entrypoint.sh /usr/share/nginx/html/entrypoint.sh
CMD ["sh", "/usr/share/nginx/html/entrypoint.sh"]
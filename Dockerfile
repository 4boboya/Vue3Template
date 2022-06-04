FROM node:14
RUN rm -rf .env
COPY ./ /app

WORKDIR /app
RUN npm install 
RUN npm run build
FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY docker-config/nginx.conf /etc/nginx/nginx.conf

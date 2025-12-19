# Frontend Dockerfile (nginx)
FROM node:18-alpine as builder

WORKDIR /app

# Zkopíruj frontend soubory
COPY ./index.html ./
COPY ./style.css ./
COPY ./app.js ./

# Nginx stage
FROM nginx:alpine

# Zkopíruj frontend do nginx
COPY --from=builder /app /usr/share/nginx/html

# Zkopíruj nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

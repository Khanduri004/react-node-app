FROM node:18-alpine AS build

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./ #
RUN npm ci
COPY . .
RUN npm run build #This builds the production version of your app

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

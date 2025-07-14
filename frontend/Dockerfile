FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install
COPY package-lock.json ./ 

COPY . .
#It runs the build scripts defined in your package.json
#When Docker runs this,it's generating a production-ready build of the app—usually a static build/ folder with HTML, CSS, and JS files.
#This is where the Node environment installs dependencies and builds the app.
#The build command outputs production-ready static files to /app/build.
RUN npm run build 

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
#Copies the static files from the previous stage to Nginx’s public directory.
#Nginx serves them as a static website.

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

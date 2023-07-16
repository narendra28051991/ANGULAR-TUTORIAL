# Stage 1: Build the Angular app
FROM node:18 AS build-stage

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular app with the 'production' configuration
RUN npm run build -- --configuration=production


# Stage 2: Create a lightweight server to serve the Angular app
FROM nginx:alpine as production-stage

# Copy the built app from the previous stage to the NGINX web server directory
COPY --from=build-stage /app/dist/tutorial /usr/share/nginx/html

# Copy the NGINX configuration file to enable HTML5 mode for routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default NGINX port
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]

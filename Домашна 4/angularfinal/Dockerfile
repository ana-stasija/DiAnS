# Base image
FROM node:14.18.1 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the application
RUN npm run build --prod

# Use a smaller base image for the application
FROM nginx:1.21.3-alpine

# Copy the built application to the container
COPY --from=build /app/dist/my-app /usr/share/nginx/html

# Expose the default port for the nginx server
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]

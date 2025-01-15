# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose port 3000 (React development server default)
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]


# # Build the app for production
# RUN npm run build

# # Use a smaller image for serving the static files
# FROM nginx:alpine

# # Copy the built app from the previous stage
# COPY --from=0 /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]
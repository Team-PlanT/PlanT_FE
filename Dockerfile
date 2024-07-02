# Use the official Node.js image as a base image
FROM node:18

# Create and change to the app directory
WORKDIR /usr/src/server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install serve to serve the build
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["serve", "-s", "build"]

# Use the official Node.js image as a base
FROM node:22.7.0

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the application files
COPY . .

# Build the remote application
RUN npx nx reset
RUN npx nx build login

# Expose the port the app runs on
EXPOSE 4201

# Command to run the app
CMD ["npx", "serve", "-s", "dist/ui/login", "-l", "4201"]

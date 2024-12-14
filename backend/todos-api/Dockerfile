# Stage 1: Build the application
FROM node:22.7.0

# Set working directory
WORKDIR /usr/src/app

# Copy root package files
COPY package*.json ./

# Copy the application files
COPY . .

# Install all dependencies for building
RUN npm ci

# Build the application
RUN npx nx reset
RUN npx nx build todos-api

# Expose the port the app runs on
EXPOSE 3001

# Command to run the app with correct path
CMD ["node", "dist/backend/todos-api/main.js"]
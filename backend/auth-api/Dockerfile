# Stage 1: Build the application
FROM node:22.7.0 AS builder

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
RUN npx nx build auth-api

# Stage 2: Production image
FROM node:22.7.0

WORKDIR /usr/src/app

# Copy package files and built application
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist/backend/auth-api ./

# Install only the essential runtime dependencies
RUN npm ci --omit=dev --ignore-scripts

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app with correct path
CMD ["node", "./main.js"]

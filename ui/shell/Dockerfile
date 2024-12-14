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
RUN npx nx build shell

# Stage 2: Production image
FROM nginx

# Copy nginx configuration from ui/shell directory
COPY ui/shell/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application
COPY --from=builder /usr/src/app/dist/ui/shell /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 4200

# Command to run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

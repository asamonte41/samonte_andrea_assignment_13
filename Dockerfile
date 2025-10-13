# --- Stage 1: Build React app & Storybook ---
FROM node:20 AS builder

# Set working directory
WORKDIR /samonte_andrea_ui_garden

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build React app
RUN npm run build

# Build Storybook
RUN npm run build-storybook

# --- Stage 2: Serve with Nginx ---
FROM nginx:stable-alpine

# Set working directory (your requirement)
WORKDIR /samonte_andrea_ui_garden

# Copy React build
COPY --from=builder /samonte_andrea_ui_garden/build /usr/share/nginx/html/react

# Copy Storybook build
COPY --from=builder /samonte_andrea_ui_garden/storybook-static /usr/share/nginx/html/storybook

# Copy custom Nginx config (create this file next)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8083
EXPOSE 8083

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

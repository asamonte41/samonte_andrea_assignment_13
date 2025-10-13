# --- Stage 1: Build React app & Storybook ---

# Use Node.js 20 image to build React app and Storybook
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

# Use lightweight Nginx Alpine image to serve static React and Storybook builds
FROM nginx:stable-alpine

# Set working directory (required)
WORKDIR /samonte_andrea_ui_garden

# Copy React production build from builder stage into Nginx container
COPY --from=builder /samonte_andrea_ui_garden/build /usr/share/nginx/html/react

# Copy Storybook static build from builder stage into Nginx container
COPY --from=builder /samonte_andrea_ui_garden/storybook-static /usr/share/nginx/html/storybook

# Copy custom Nginx configuration into the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8083
EXPOSE 8083

# Start Nginx in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]

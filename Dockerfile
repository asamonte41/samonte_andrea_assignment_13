# --- Stage 1: Build React app ---
FROM node:20 AS builder

WORKDIR /samonte_andrea_ui_garden_build_checks

COPY package*.json ./
RUN npm install

COPY . .

# Build React app
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:stable-alpine

WORKDIR /samonte_andrea_ui_garden_build_checks

# Copy React production build from builder stage into Nginx container
COPY --from=builder /samonte_andrea_ui_garden_build_checks/build /usr/share/nginx/html

# Copy default Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8018
EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]

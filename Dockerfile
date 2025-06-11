# Use Node base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose dev server port (default: 5173)
EXPOSE 5173

# Start Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
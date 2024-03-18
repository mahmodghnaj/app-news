
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining project files to the working directory
COPY . .

# Copy .env file to the working directory
COPY .env .env

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the React app when the container starts
CMD ["npm", "start"]

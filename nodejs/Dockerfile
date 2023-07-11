# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the app source code to the container
COPY . .

# Set environment variables
ENV PORT=8000
ENV NEO4J_URI='bolt://neo4j:7687'
ENV NEO4J_USERNAME='neo4j'
ENV NEO4J_PASSWORD='admin'

# Expose port 8000
EXPOSE $PORT

# Start the Node.js app
CMD ["npm", "start"]

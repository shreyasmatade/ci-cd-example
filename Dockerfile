# Use official node image.
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

RUN npm install

# Bundle app source inside Docker image
COPY . .

# Your app binds to port 5000 so you use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 5000

# Define the command to run your app using CMD which defines your runtime.
CMD [ "node", "server.js" ]

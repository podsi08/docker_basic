FROM node:8

# create app directory
WORKDIR /app

# copy package.json (and package-lock.json) into the container
COPY package*.json ./

# install required dependencies
RUN npm install

COPY . /app

# Make port 3000 available outside this container
EXPOSE 3000

CMD ["npm", "start"]

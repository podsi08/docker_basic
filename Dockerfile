FROM keymetrics/pm2:latest-alpine

# create app directory
WORKDIR /app

# copy package.json (and package-lock.json) into the container
COPY package*.json ./

# install required dependencies
RUN npm install

COPY . /app

# Make port 3000 available outside this container
EXPOSE 3000

CMD ["pm2-runtime", "process.yml"]

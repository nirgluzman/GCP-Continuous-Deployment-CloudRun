# define the base image pulled from docker hub (remote repository)
FROM node:22

# # install pnpm
# RUN npm i -g pnpm

# set the current working directory for subsequent instructions in the Dockerfile
WORKDIR /app

COPY package.json .

# install all of the packages mentioned in `package.json`
RUN npm install

# copy the application folder from the host system into the docker image
COPY . .

# tell Docker that a container listens for traffic on the specified port
EXPOSE 3000

# define the default executable of a Docker image
CMD ["npm", "start"]

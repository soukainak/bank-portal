# # base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app/
RUN pwd

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY public /app/public
COPY src /app/src

#RUN yarn
RUN yarn

# start app
CMD ["yarn", "start"]
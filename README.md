# bank-portal

To run **bank-portal** application please follow these steps:

- First checkout bank-portal project
- Then install dependencies with `yarn install` 
- In order to start the application, first start the server with `yarn server` then start the client side with `yarn start`
- If you fancy using Docker (client side only at the moment) and you already have it            installed on your machine, just build the docker image with the given Dockerfile: 
    `docker build -f Dockerfile . -t bank-portal`
  Then run this container with : 
    `docker run -p 8080:3000 bank-portal`

You can hit the client on this address **http://localhost:8080** and you keep your local json-server running

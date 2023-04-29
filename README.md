# Pokemon UI

This is an Angular project called pokemon-ui that provides a user-friendly interface for interacting with my [Pokemon API](https://github.com/DavidRR-F/pokemon_api). The Pokemon API is a FastAPI-based API that allows users to access and manipulate data stored in a PostgreSQL database. The pokemon-ui serves as a front-end application that consumes the API, enabling users to easily manage and explore their favorite Pokemon.

The pokemon-ui application is built using Angular 13. It communicates with the backend Pokemon API through HTTP requests, providing an intuitive and responsive user experience.

The project structure is organized according to Angular best practices, with separate modules for different components and services. This ensures that the application remains maintainable and easy to understand as it grows.

By integrating the pokemon-ui with the Pokemon API, users can now effortlessly manage their Pokemon data in a visually appealing and easy-to-use interface. The modular architecture of both the front-end and back-end components ensures scalability and maintainability, making it simple to expand the application with additional features or to handle increased user demand.

To run the pokemon-ui, Ensure that you have node.js, angular cli version 13, npm, and docker on your system.

## Run Application

To Run this application you can simply use the docker compose file to grab and run the images from docker hub from the root directory

```
$ docker-compose up -d
```

This will run a nginx server on port 80 of your local machine

- Pokemon UI: http:/localhost

- Pokemon API: http:/localhost/api

Then if you want to run the UI on a development mode run the following commands

```
$ npm install
$ npm run start
```
The UI will be available at the following url:
- Pokemon UI: http:/localhost:4200

***Note: This step assumes you have Angular CLI version 13 on your device***





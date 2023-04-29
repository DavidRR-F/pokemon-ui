# PokemonUi

This is an Angular project called pokemon-ui that provides a user-friendly interface for interacting with the Pokemon API. The Pokemon API is a FastAPI-based API that allows users to access and manipulate data stored in a PostgreSQL database. The pokemon-ui serves as a front-end application that consumes the API, enabling users to easily manage and explore their favorite Pokemon.

The pokemon-ui application is built using Angular, a powerful web application framework that offers a modular and scalable architecture. It communicates with the backend Pokemon API through HTTP requests, providing an intuitive and responsive user experience.

The project structure is organized according to Angular best practices, with separate modules for different components and services. This ensures that the application remains maintainable and easy to understand as it grows.

To run the pokemon-ui, follow these steps:

Ensure that you have Node.js and npm (Node Package Manager) installed on your system.

Clone the pokemon-ui repository and navigate to the project directory.

Run npm install to download and install the necessary dependencies.

Make sure the Pokemon API is running (follow the instructions in the Pokemon API repository).

Start the development server by running ng serve. The application will be available at http://localhost:4200/.

To build the project for production, run ng build --prod. This will generate a dist/ directory containing the optimized, production-ready files.

By integrating the pokemon-ui with the Pokemon API, users can now effortlessly manage their Pokemon data in a visually appealing and easy-to-use interface. The modular architecture of both the front-end and back-end components ensures scalability and maintainability, making it simple to expand the application with additional features or to handle increased user demand.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Submissions

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.
## Target

The main target whit this proyect is show the management and visualization from a list of sumbmissions.
This proyect has been builded whit Angular using also Angular Material and the BEM metodologi for write scss.



## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## File system structure

The file system of the project was divided in the following folders:
* ### Services:
This folder contains the core of the management system. The submission service is the main handler of the entire application; it loads the data, applies filters, and modifies its properties.
* ### Components:
As the name suggests, this folder contains all the components of the application.
* ### Layout:
This folder includes a component responsible for the overall layout. In this use case, it contains a navigation bar that must be visible throughout the application, which is why it is placed in the layout folder.
* ### Views:
For this use case, there are two ways to visualize the information: as a list or on a map. The Views folder contains the components responsible for rendering these visualizations.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

# React To-Do App with Firebase Realtime Database and MUI

This project is a simple yet functional to-do application built with React, Material UI (MUI), and Firebase Realtime Database. It provides basic CRUD (Create, Read, Update, Delete) functionality for managing to-do items. The frontend is dockerized for consistent development and deployment, and the application is hosted on Vercel.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Running the App Locally (with Docker)](#running-the-app-locally-with-docker)
    -   [Running the App Locally (without Docker)](#running-the-app-locally-without-docker)
-   [Deployment](#deployment)
-   [Future Goals](#future-goals)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   Add new to-do items.
-   Mark to-do items as complete.
-   Delete to-do items.
-   Realtime updates using Firebase Realtime Database.
-   User-friendly interface with Material UI (MUI).
-   Dockerized frontend for consistent development environments.
-   Hosted on Vercel for easy deployment.
- Loading Skeleton for a good user experience.

## Technologies Used

-   [React](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [Material UI (MUI)](https://mui.com/): A popular React UI framework.
-   [Firebase Realtime Database](https://firebase.google.com/docs/database): A NoSQL database for real-time data synchronization.
-   [Docker](https://www.docker.com/): A platform for containerizing applications.
-   [Vercel](https://vercel.com/): A platform for hosting frontend web applications.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
-   [Docker](https://www.docker.com/) (if you want to run the app in a container)
-   A Firebase project (see [Firebase Setup](#firebase-setup))

### Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/JAbelP/my-todo-app.git]
    cd my-todo-app
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

3.  Create a `.env` file in the root of your project and add your Firebase configuration (see [Firebase Setup](#firebase-setup)).

### Running the App Locally (with Docker)

1.  Build the Docker image:

    ```bash
    docker build -t my-todo-app-dev .
    ```

2.  Run the Docker container (adjust the path if using PowerShell):

    **CMD:**

    ```bash
    for /f "tokens=*" %i in ('cd') do @set current_dir=%i
    docker run -p 3000:3000 -v "%current_dir%:/app" my-todo-app-dev
    ```

   **Git Bash:**

   ```bash
   docker run -p 3000:3000 -v //$(pwd):/app my-todo-app-dev

    **PowerShell:**

    ```powershell
    docker run -p 3000:3000 -v "$PWD:/app" my-todo-app-dev
    # or
    docker run -p 3000:3000 -v "C:\full\path\to\your\project:/app" my-todo-app-dev
    ```
3. Open your browser and navigate to http://localhost:3000.

### Running the App Locally (with Docker)
1. Start the development server:
     **CMD:**

    ```bash
     npm start # or yarn start
    ```
2. Open your browser and navigat to http://localhost:3000.



## Deployment

The application is deployed on [Vercel](https://vercel.com/). You can deploy your own copy by connecting your GitHub repository to Vercel.

## Future Goals

-   Dockerize the Firebase backend (using the Firebase Emulator Suite in a Docker container).
-   Implement user authentication with Firebase Authentication.
-   Add more advanced features like task prioritization, due dates, or categories.
-   Improve testing (add unit and integration tests).
-   Add more robust error handling.
-   Add user authentication

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

[MIT](LICENSE)

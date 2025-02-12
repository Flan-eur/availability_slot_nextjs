Getting Started

This project includes a Next.js application and a Redis instance, which can be run using Docker Compose or locally on your machine. Follow the instructions below to set up and run the project.
Prerequisites

Before you begin, ensure you have the following installed:
    Docker
    Docker Compose
    Node.js (if running locally)
    npm or Yarn (if running locally)

///////////////////////////Running with Docker Compose

The easiest way to run the application is using Docker Compose. This will set up both the Next.js app and Redis in isolated containers.
Steps

extract the file and inside the SLOT-APP

    Build and Run the Containers:
    Run the following command to start the services:

    #docker-compose up

        This will:

            Build the Next.js app using the Dockerfile.

            Start a Redis container.

            Start the Next.js app container.

    Access the Application:

        Open your browser and navigate to http://localhost:3000 to view the Next.js app.

        The Redis instance will be available at redis://localhost:6379.

    Stop the Services:
    To stop the services, press Ctrl+C or run:

    #docker-compose down


////////////////////////Running Locally

If you prefer to run the application locally without Docker, follow these steps.
Steps
extract the file, inside the SLOT-APP

    Install Dependencies:
    Install the required dependencies for the Next.js app

    # npm install

    Set Up Redis:

        Install Redis on your machine:

            Windows: Download Redis from here.

        Start the Redis server:

        #redis-server

    Set Environment Variables:
    Create a .env file in the root of the project with the following content:
    plaintext
    Copy

    REDIS_HOST=localhost
    REDIS_PORT=6379

    Run the Next.js App:
    Start the Next.js development server:

    #npm run dev

    Access the Application:
    Open your browser and navigate to http://localhost:3000.

Environment Variables

The following environment variables are used in the project:

    REDIS_HOST: The hostname for the Redis server (default: redis for Docker, localhost for local).

    REDIS_PORT: The port for the Redis server (default: 6379).

Project Structure

    Dockerfile: Defines the Docker image for the Next.js app.

    docker-compose.yml: Defines the services for the Next.js app and Redis.

    .env: Contains environment variables (optional).

    src/: Contains the Next.js application code.

    public/: Contains static assets for the Next.js app.
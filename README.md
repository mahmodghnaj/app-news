# News Application

## Running with Docker

### Prerequisites

- Docker installed

### Building the Docker Image

To build the Docker image, run the following command in the root directory of your project:

```bash
docker build --tag news-app .
```

### Running the Docker Container

To run the Docker container, use the following command:

```bash
docker run -p 3000:3000 -d news-app
```

This command will start the React application within a Docker container. Port 3000 of the container will be mapped to port 3000 on your local machine.

### Accessing the Application

Once the Docker container is running, open a web browser and navigate to http://localhost:3000 to view the React application.

# Cloning, Installing Dependencies, and Running the Application

## Prerequisites:

- Node.js and npm installed on your system (Node.js version >= 18)
- Git installed on your system

## 1. Clone the Repository from GitHub:

To clone the repository from GitHub, open a terminal or command prompt and run the following command:

```sh
git clone https://github.com/mahmodghnaj/app-news.git
```

## 2. Navigate to the Project Directory:

```sh
cd app-news
```

## 3. Install Dependencies:

```sh
npm install
```

## 4. Start the Application:

```sh
npm run start
```

## 5. Access the Application:

Once the application has started, open a web browser and navigate to the URL provided by the application. By default, most React applications start on http://localhost:3000/.

# Startup Project

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a web application that allows users to manage and view details of various startups. It consists of a frontend built with React and a backend built with Node and Express. The data is stored in a JSON file on the server.

## Features

- View a list of startups with their details.
- Add new startup details through a form.
- Filter startups based on industry categories.

## Project Structure

The project is structured as follows:
/startup-project
|-- /frontend # React frontend
|-- /backend # Express backend
|-- startup.json # JSON file for storing startup data
|-- .env # Environment variables (used for PORT)
|-- README.md # Project documentation


## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository: git clone https://github.com/your-username/startup-project.git
2. cd startup-project
3. cd frontend
4. npm install
5. cd ../backend
6 npm install

### Configuration
Set up environment variables. 
Create a .env file in the backend directory and write PORT number on which you want to run your server.

### Usage
Start the backend server:
cd backend
npm start

Start the frontend:
cd frontend
npm start

Open your browser and visit http://localhost:3000 to access the application.

## API Endpoints
GET /api/startups: Retrieve a list of startups.
POST /api/startups: Add a new startup.

## Technologies Used

- # Frontend:
  - HTML, JavaScript
  - React
  - Tailwind CSS
  - Flowbitebite React : Used here for modal.

- # Backend:
  - Node.js
  - Express

## Contributing
Contributions are welcome! Fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

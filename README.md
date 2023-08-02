# ChatGPT Backend App

![Node.js](https://img.shields.io/badge/Node.js-v14.17.3-green.svg)
![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-blue.svg)

Welcome to the ChatGPT Backend App! This application is designed to interact with the OpenAI ChatGPT API and create a user-friendly chat interface for prompt-based conversations. The backend handles communication with the API, while the limited frontend showcases the conversation in a chat app style display.

## Getting Started

To run the application locally, make sure you have Node.js and npm installed on your system. Clone this repository and follow the steps below:

1. Install dependencies:
   ```bash
   npm install
2. Set up enviroment variables:
Create a `.env` file in the root directory and add your OpenAI API key and your organization key,
you get them by creating an account https://chat.openai.com/:
   
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   ORGANIZATION=your_openai_organization_key_here
3. Run the application:
   ```bash 
   npm start
4. The app will be running at `http://localhost:3000`.

## How It Works

1. Open the application in your web browser.
2. Type a prompt in the chat input box and press Enter.
3. The backend will send the prompt to the ChatGPT API for processing.
4. While the API processes the prompt and generates a response, the frontend user interface will be deactivated to prevent new prompts.
5. Once the response is received from the API, it will be displayed in the chat app style display.
6. You can continue the conversation by typing new prompts.

## Technologies Used

- Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js - A fast and minimalist web framework for Node.js.
- EJS - A simple and effective templating engine for generating HTML markup with JavaScript.
- dotenv - A module to load environment variables from a .env file.
- node-fetch - A module to make HTTP requests in Node.js, used for communicating with external APIs.
- openai - A package for interacting with the OpenAI API to utilize their services.
- body-parser - A middleware to handle HTTP request bodies in Express.js.
- Jest - A JavaScript testing framework for running tests in Node.js.

## Deployment

This backend app can be deployed to platforms like Heroku, AWS, or any other suitable hosting service. Make sure to set the environment variables appropriately for production.

## Contributions

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.






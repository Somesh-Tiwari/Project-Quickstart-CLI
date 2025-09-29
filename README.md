# Project QuickStart CLI
A simple and fast command-line tool to scaffold new MERN stack projects. 
Stop wasting time with manual setup and start coding faster!


# Installation
To install this tool globally from npm, run the following command:

```bash
npm install -g @somesht/project-quickstart-cli


## Usage
To create a new project, navigate to the directory where you want your project to live and run:

`quickstart <your-project-name>`

For example:
```bash
quickstart my-awesome-app


# Project Structure
The tool will generate the following directory and file structure, giving you a production-ready starting point for your MERN application:

my-awesome-app/
├── client/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       └── App.js
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   └── routes/
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
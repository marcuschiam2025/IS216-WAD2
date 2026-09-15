const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require("cors");

const blogsRoutes = require('./routes/blogs-routes');

const server = express();

// make sure u add this line when you are using Express to do form (POST)
server.use(express.urlencoded({ extended: true }));

// Enable CORS for all requests from localhost
const allowedLocalhost = /^http:\/\/localhost(:\d+)?$/;
// optional: also allow 127.0.0.1
const allowed127 = /^http:\/\/127\.0\.0\.1(:\d+)?$/;
server.use(cors({
  origin: (origin, callback) => {
    // allow non-browser tools like Postman/curl (no Origin header)
    if (!origin) return callback(null, true);

    if (allowedLocalhost.test(origin) || allowed127.test(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: false // set to true only if you use cookies/sessions
}));

// express.json() is a middleware
server.use(express.json());

// Set EJS as the view engine for rendering dynamic HTML pages
server.set("view engine", "ejs"); 

// root routes
server.use('/posts', blogsRoutes);


// Specify the path to the environment variablef file 'config.env'
dotenv.config({ path: './config.env' });

// async function to connect to DB
async function connectDB() {
  try {
    // connecting to Database with our config.env file and DB is constant in config.env
    await mongoose.connect(process.env.DB);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

function startServer() {
  const hostname = "localhost"; // Define server hostname
  const port = 8000;// Define port number
 
  // Start the server and listen on the specified hostname and port
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

// call connectDB first and when connection is ready we start the web server
connectDB().then(startServer);



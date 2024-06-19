// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cors from "cors";
// import router from "./routes/reviewRoutes.js";
// dotenv.config();
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// const PORT = process.env.PORT || 7000;
// const URL = process.env.MONGOURL;

// app.use('/api', router);

// mongoose.connect(URL).then(()=>{

//     console.log("DB connected successfully");

//     app.listen(PORT, ()=>{
//         console.log(`Server is running on port: ${PORT}`);
//     })

// }).catch(error => console.log(error));


import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/reviewRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Configure CORS to allow requests from your Netlify subdomain
const allowedOrigins = ['https://review.saumic.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

// Define the port
const PORT = process.env.PORT || 7000;

// MongoDB connection URL from environment variables
const URL = process.env.MONGOURL;

// Use the router for API routes
app.use('/api', router);

// Connect to MongoDB and start the server
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch(error => console.log(error));
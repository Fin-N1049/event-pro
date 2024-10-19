const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/mongodb'); // Import your MongoDB connection configuration
const merchentrouter = require('./router/merchentrouter')
const Opinion = require('./model/FoodOpiniondb'); // Ensure the path is correct
const Review = require('./model/Review'); 
dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN || 'http://localhost:3000',
    credentials: true
}));

// Connect to MongoDB
connectDB();



const PORT = process.env.PORT || 5000;


app.use('/api',merchentrouter);
// const Opinion = require('./model/FoodOpiniondb'); // Adjust the path as necessary
// const Review = require('./model/Review'); // Adjust this according to your Review model file




// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

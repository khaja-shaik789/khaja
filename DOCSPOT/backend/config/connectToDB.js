const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/subhaga", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;

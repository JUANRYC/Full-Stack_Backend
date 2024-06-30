//Información de comunicacion con la base de datos

//Definimos variables
const mongoose = require('mongoose');
require ("dotenv").config()

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true) 
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Atlas conectado');
  } catch (error) {
    console.error('Error de conexión a MongoDB Atlas:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
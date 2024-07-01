const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require('./config/database');
const empleadoRoutes = require('./routes/empleado.routes');

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
//dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({origin:"*"}));

//Ruta de nuestro servidor
app.use('/api/empleados', empleadoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middleware/error');

//load env vars
dotenv.config({ path: './config/config.env' });

// connect to databse
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');


const app = express();

<<<<<<< HEAD
// Body parser
=======
//Body parser
>>>>>>> a07e6d6e3811da6245d7ca4e283ffdb8b5c4a3ab
app.use(express.json());


// DEV logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// errorhandler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold)
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)

    //close server and exit process
    server.close(() => {
        process.exit(1);
    })
})
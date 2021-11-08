const ErrorResponse = require('../utils/errorResponse')

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    
    error.message = err.message;

    // log to console for dev
    console.log(err);

    // Mongoose bad object id
    if(err.name === 'CastError') {
        const message = `Bootcamp not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }
    // console.log(err.name);

    //Mongoose duplicate key
    if(err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }


    // console.log(err.name);

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;
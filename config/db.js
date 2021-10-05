const mongoose = require('mongoose');

const connectDB = async () => {
    // mongoose.connect() will return a promise so it's an async function
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
    // try {
        
    // } catch (error) {
    //     console.log(error);
    // }
};

module.exports = connectDB;
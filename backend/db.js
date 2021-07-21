const mongoose = require('mongoose');

const connectToDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(conn => {
        console.log(`MongoDB connected with HOST: ${conn.connection.host}`)
    })
}

module.exports = connectToDatabase;
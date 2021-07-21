const app = require('./app');
const connectToDatabase = require('./db');
const dotenv = require('dotenv');

//setup config file
dotenv.config({ path: './config.env' });

//connecting to mongodb local server
connectToDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT} at ${process.env.NODE_ENV} mode`);
})
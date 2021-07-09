const app = require('./app');
const dotenv = require('dotenv');

//setup config file
dotenv.config({ path: './config.env' });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT} at ${process.env.NODE_ENV} mode`);
})
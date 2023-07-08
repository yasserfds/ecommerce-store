const app = require('./app');

const dotenv = require('dotenv');

// config
dotenv.config({
    path: "backend/config/.env",
});

// Create Server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on https://localhost:${process.env.PORT}`);
});
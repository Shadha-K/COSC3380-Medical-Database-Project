//TODO: Connect database to backend
const mysql = require('mysql');
require('dotenv').config();

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    connectionLimit: 10 // Adjust according to your needs
});

// Export the pool to be used in other modules
module.exports = pool;

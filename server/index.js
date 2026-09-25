const express = require("express");
const app = express();

const db = require("./models");

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Successfully connected to MySQL database: ' + process.env.DB_NAME);
        return db.sequelize.sync();
    })
    .then(() => {
        app.listen(process.env.PORT || 3001, () => {
            console.log(`Server running on port ${process.env.port || 3001}`)
        })
    })
    .catch((err) => {
        console.error('Database connection failed: ' + err.message);
    });
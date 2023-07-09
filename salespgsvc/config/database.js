require('dotenv').config();

const {
    DB_HOST = process.env.DB_HOST,
    DB_USERNAME = process.env.DB_USERNAME,
    DB_PASSWORD = process.env.DB_PASS,
    DB_NAME = process.env.DB_NAME
} = process.env

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: 'postgres'
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: 'postgres'
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: 'postgres'
    }
}
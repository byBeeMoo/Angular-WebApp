import dotenv from 'dotenv'
dotenv.config();

export default {
    MONGO_DATABASE: 'myapp',
    MONGO_USER: 'admin',
    MONGO_PASSWORD: 'admin',
    MONGO_HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 4000
};
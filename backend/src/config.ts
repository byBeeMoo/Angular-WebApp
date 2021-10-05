import dotenv from 'dotenv'
dotenv.config();

export default {
    MONGO_DATABASE: 'myapp',
    MONGO_USER: 'admin',
    MONGO_PASSWORD: 'admin',
    MONGO_HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 4000,
    HOST: process.env.HOST || 'localhost',
    CORS: process.env.CORS || 'http://localhost:4200'
};
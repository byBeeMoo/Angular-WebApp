import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import config from './config';
import commentsRoutes from './routes/comments.routes';

// App
const app = express();

// Configs
app.set("port", config.PORT);
app.set("host", config.HOST);

// MiddleWares
app.use(morgan('dev'));                             // Prints clients requests information
app.use(cors({'origin': config.CORS}));             // Allows other servers to send requests to this server
app.use(express.json());                            // Allows the app to interpret JSON Objects on requests
app.use(express.urlencoded({extended: false}));     // Interpret better the fields coming form a POST request

// Routing
app.use(commentsRoutes);

export default app;
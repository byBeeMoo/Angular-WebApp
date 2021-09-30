import app from './app';
import './database';

app.listen(app.get("port"), '0.0.0.0', () => {
    console.log(`Server @ 0.0.0.0:${app.get("port")}`);  
});
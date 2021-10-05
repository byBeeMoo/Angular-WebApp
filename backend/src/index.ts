import app from './app';
import './database';

app.listen(app.get("port"), app.get("host"), () => {
    console.log(`Server @ ${app.get("host")}:${app.get("port")}`);  
});
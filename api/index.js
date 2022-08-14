import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './middleware/Database.js'
import routeApp from './routes/index.router.js'

dotenv.config();

const app = express();
app.use(express.json());

//ConnectDB
connectDB().then();

//Router
routeApp(app);


app.listen(8080, () => {
    console.log(`Server listening on port : 8080`)
})
import express, {Application, Request, Response} from 'express';
import wheaterRoutes from './routes/wheater';
import connectDB from './config/db';
import path from 'path';

const app: Application = express();

connectDB();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json({msg: "hello world!!"})
})

app.use('/api/v1/clima', wheaterRoutes);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./dist'))
    app.get('*', (req, res)=> res.sendFile(path.resolve(__dirname, 'dist', 'index.html')))
}

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server running on port: ${port}`))
import express, {Application, Request, Response} from 'express';
import wheaterRoutes from './routes/wheater';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.json({msg: "hello wordl!!"})
})

app.use('/api/v1/clima', wheaterRoutes);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port: ${port}`))
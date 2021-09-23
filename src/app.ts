import express, {Application, Request, Response} from 'express';
import wheaterRoutes from './routes/wheater';
import connectDB from './config/db';
import path from 'path';

const app: Application = express();

connectDB();

app.use(express.json())

app.use('/api/v1/clima', wheaterRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
  
    app.get('*', (req: Request, res: Response) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req: Request, res: Response) => {
      res.send('API is running....')
    })
  }

const port = process.env.PORT || 8001

app.listen(port, () => console.log(`Server running on port: ${port}`))
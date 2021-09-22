import express, {Request, Response} from 'express'
import { wheaterInfoModel } from '../models/wheaterInfo'
const router = express.Router();

// create new WheaterInfo Document
router.post('/', async(req: Request, res: Response) => {

    const { 
        Codigo,
        Estacion,
        HoraUpdate,
        Temp,
        Humedad,
        Estado,
        Icono } = req.body;

    try{
        const newWheaterInfo = new wheaterInfoModel({
            Codigo,
            Estacion,
            HoraUpdate,
            Temp,
            Humedad,
            Estado,
            Icono 
        });

        const wheaterInfo = await newWheaterInfo.save();
        res.json(wheaterInfo);
    }catch(err: any){
        console.error(err.message);
        res.status(500).send('Server Error');
    } 
})

// Get all wheaterInfo documents
router.get('/', async (req: Request, res: Response) => {
    try {
        const list = await wheaterInfoModel.find();
        res.json(list);
    } catch (err: any) {
        console.error(err.message);
        res.status(404).send('Not Found');
    }
})


// Get a wheaterInfo document given a code
router.get('/:codigo', async(req, res)=>{
    try {
        const wheaterInfo = await wheaterInfoModel.findOne({Codigo: req.params.codigo});
        res.json(wheaterInfo);
    } catch (err: any) {
        console.error(err.message);
        res.status(404).send('Not Found');
    }
});

export default router
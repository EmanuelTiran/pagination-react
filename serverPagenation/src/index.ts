import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import { connectToMongo } from './models/connectToMongo';
import UserRouter from './routers/UserRouter'
import CarRouter from './routers/CarRouter'
import {  insertDataCar, insertDataUser } from './insertData';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users',UserRouter)
app.use('/cars',CarRouter)

connectToMongo()

// insertDataCar();
// insertDataUser();

app.listen(3355,()=>console.log("### Server Is Running on Port 3355 #####"));
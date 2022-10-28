process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

//Env files
import dotenv = require('dotenv');

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
})
console.log(process.env.APP_FOO);

//Para definir el comportamiento de la app
import express = require('express');

const app: express.Application = express();

// Levantamiento en el navegador
 app.get('/', (req, res) =>{
    res.send('Hola Mundo');
 })

 //Contenedor
 import {container} from './container';
import { TestService } from './services/test.service';

 const testService = container.resolve<TestService>('testService');
 console.log(testService.get());
 

 export { app };
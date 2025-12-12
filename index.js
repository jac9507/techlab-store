import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';

//Routers
import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares globales
app.use(cors());
app.use(bodyParser.json());

//Rutas
app.use('/api', productsRouter);
app.use('/auth', authRouter);

//Middleware 404
app.use((req, res, next) => {
res.status(404).send('Recurso no encontrado');
});

//Start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

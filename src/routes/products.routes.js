import express from 'express';
import { authentication } from '../middlewares/authentication.js';
import {
    getAllProductsController,
    getProductByIdController,
    createProductController,
    deleteProductController
} from '../controllers/products.controller.js';

const router = express.Router();

// Protegidas por JWT
router.get('/products', authentication, getAllProductsController);
router.get('/products/:id', authentication, getProductByIdController);
router.post('/products/create', authentication, createProductController);
router.delete('/products/:id', authentication, deleteProductController);

export default router;

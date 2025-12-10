// src/services/products.service.js
import {
    getAllProductsModel,
    getProductByIdModel,
    saveProductModel,
    deleteProductModel
} from '../models/products.model.js';

// Devuelve todos los productos
export async function getAllProductsService() {
    return await getAllProductsModel();
}

// Devuelve un producto por ID
export async function getProductByIdService(id) {
    return await getProductByIdModel(id);
}

// Crea un nuevo producto
export async function createProductService(product) {
    return await saveProductModel(product);
}

// Elimina un producto por ID
export async function deleteProductService(id) {
    return await deleteProductModel(id);
}

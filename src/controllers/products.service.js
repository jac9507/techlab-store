import {
    getAllProductsModel,
    getProductByIdModel,
    saveProductModel,
    deleteProductModel
} from '../models/products.model.js';

export async function getAllProductsService() {
    return await getAllProductsModel();
}

export async function getProductByIdService(id) {
    return await getProductByIdModel(id);
}

export async function createProductService(product) {
    return await saveProductModel(product);
}

export async function deleteProductService(id) {
    return await deleteProductModel(id);
}

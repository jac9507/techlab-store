import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from '../services/products.service.js';

export async function getAllProductsController(req, res) {
  const products = await getAllProductsService();
  res.status(200).json(products);
}

export async function getProductByIdController(req, res) {
  const { id } = req.params;
  const product = await getProductByIdService(id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  res.status(200).json(product);
}

export async function createProductController(req, res) {
  try {
    const { name, price, category, description, sku, stock } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({ message: 'name, price y category son obligatorios' });
    }

    const product = { name, price, category, description, sku, stock };
    const created = await createProductService(product);

    res.status(201).json({ id: created.id, ...product });
  } catch (err) {
    res.status(500).json({ message: 'Error al crear producto', error: err.message });
  }
}

export async function deleteProductController(req, res) {
  const { id } = req.params;
  const deleted = await deleteProductService(id);
  if (!deleted) return res.status(404).json({ message: 'Producto no encontrado' });
  res.status(200).json({ message: `Producto ${id} eliminado` });
}

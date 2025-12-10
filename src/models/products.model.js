import { db } from '../data/data.js';
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

// Obtener todos los productos
export async function getAllProductsModel() {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Obtener producto por ID
export async function getProductByIdModel(id) {
    const ref = doc(db, 'products', id);
    const snapshot = await getDoc(ref);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

// Guardar producto nuevo
export async function saveProductModel(product) {
    const ref = await addDoc(productsCollection, {
        name: product.name,
        price: Number(product.price),
        category: product.category,
        description: product.description || '',
        sku: product.sku || '',
        stock: Number(product.stock) || 0
    });
    return { id: ref.id };
}

// Eliminar producto por ID
export async function deleteProductModel(id) {
    const ref = doc(db, 'products', id);
    await deleteDoc(ref);
    return true;
}


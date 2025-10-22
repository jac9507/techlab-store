// Captura los argumentos ingresados desde la terminal (ej: GET products)
const args = process.argv.slice(2);
const [method, resource, ...rest] = args;

// Extrae método HTTP, recurso y parámetros desde la terminal para construir la petición

const BASE_URL = "https://fakestoreapi.com";
// URL base de la API FakeStore — se usa como punto de partida para todas las peticiones

// Realiza una petición HTTP a la API FakeStore usando fetch y muestra el resultado en consola
// Admite métodos GET, POST, DELETE y cuerpo opcional para enviar datos
async function request(method, endpoint, body = null) {
    const config = {
        method,
        headers: { "Content-Type": "application/json" },
    };
    if (body) config.body = JSON.stringify(body);

    try {
        const res = await fetch(`${BASE_URL}/${endpoint}`, config);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Si el comando es GET products o GET products/<id>, consulta la API y muestra los productos
if (method === "GET" && resource === "products") {
    const id = rest[0];
    const endpoint = id ? `products/${id}` : "products";
    request("GET", endpoint);
}

// Si el comando es POST products <title> <price> <category>, crea un nuevo producto en la API
if (method === "POST" && resource === "products") {
    const [title, price, category] = rest;
    const body = { title, price: Number(price), category };
    request("POST", "products", body);
}

if (method === "DELETE" && resource === "products") {
    const id = rest[0];
    request("DELETE", `products/${id}`);
}

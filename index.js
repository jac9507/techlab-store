const args = process.argv.slice(2);
const [method, resource, ...rest] = args;

const BASE_URL = "https://fakestoreapi.com";

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
    } catch (err) {
        console.error("Error:", err.message);
    }
}

if (method === "GET" && resource === "products") {
    const id = rest[0];
    const endpoint = id ? `products/${id}` : "products";
    request("GET", endpoint);
}

if (method === "POST" && resource === "products") {
    const [title, price, category] = rest;
    const body = { title, price: Number(price), category };
    request("POST", "products", body);
}

if (method === "DELETE" && resource === "products") {
    const id = rest[0];
    request("DELETE", `products/${id}`);
}

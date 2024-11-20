function updatePriceValue(value) {
    document.getElementById("priceValue").textContent = value;
}
const cardContainer = document.getElementById("card-container");

async function fetchProperties() {
    try {
        const response = await fetch("https://fr0z4mdlid.execute-api.us-west-2.amazonaws.com/getproperties");
        if (!response.ok) throw new Error("Error al obtener los datos");

        const data = await response.json();
        const properties = data.properties;

        properties.forEach(property => {
            const card = document.createElement("div");
            card.classList.add("card");

            const title = property.name.S;
            const price = property.price.N;

            card.innerHTML = `
                <h3>${title}</h3>
                <p>Precio: $${price}</p>
                <button>Ver</button>
            `;

            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error al cargar las propiedades:", error);
    }
}

fetchProperties();

import { aplicarFiltros } from './func.js';

document.addEventListener("DOMContentLoaded", () => {
    const ids = {};
    aplicarFiltros(ids);
});
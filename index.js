function updatePriceValue(value) {
    document.getElementById("priceValue").textContent = value;
}

const properties = [
    { id: 1, title: "Casa en Venta", location: "Centro", image: "img1.jpg", description: "3 dormitorios, 2 baños" },
    { id: 2, title: "Departamento en Alquiler", location: "Zona Norte", image: "img2.jpg", description: "2 dormitorios, 1 baño" },
    { id: 3, title: "Lote en Venta", location: "Zona Sur", image: "img3.jpg", description: "500 m², servicios incluidos" },
    // Agrega más propiedades según sea necesario
];

const cardContainer = document.getElementById("card-container");

properties.forEach(property => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${property.image}" alt="${property.title}">
        <h3>${property.title}</h3>
        <p>${property.location}</p>
        <p>${property.description}</p>
    `;

    cardContainer.appendChild(card);
});

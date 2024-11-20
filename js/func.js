export function aplicarFiltros(ids) {
    const drops = document.querySelectorAll(".dropdown");

    drops.forEach((dropdown) => {
        const botones = dropdown.querySelector(".dropdown-toggle");
        const items = dropdown.querySelectorAll(".dropdown-item");

        items.forEach(item => {
            item.addEventListener("click", function() {
                const categoria = botones.getAttribute("data-type");
                const idselec = this.getAttribute("data-id");

                ids[categoria] = idselec;
                botones.innerHTML = this.innerText;

                console.log(`Filtro: `, ids);
            });
        });
    });
}
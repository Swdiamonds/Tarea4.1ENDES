//2Modificacion
// Funcionalidad para "Seguir leyendo"
document.querySelector('.contenido .mas').addEventListener('click', function() {
    var paragraph = document.querySelector('.contenido .expanded');
    var isExpanded = paragraph.style.display !== "none";

    if (!isExpanded) {
        paragraph.style.display = "block";
        this.textContent = 'Ocultar';
    } else {
        paragraph.style.display = "none";
        this.textContent = 'Seguir leyendo';
    }
});

// Funcionalidad para crear la Tier List
document.getElementById('boton').addEventListener('click', function() {
    var tierList = document.querySelector('.tier-list');

    var games = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5']; // Ejemplo de juegos

    // Limpiar la tier list antes de añadir nuevos elementos
    tierList.innerHTML = '';

    // Crear y añadir elementos a la tier list
    games.forEach(function(game) {
        var listItem = document.createElement('div');
        listItem.classList.add('tier-list-item');
        listItem.textContent = game;
        tierList.appendChild(listItem);
    });
});
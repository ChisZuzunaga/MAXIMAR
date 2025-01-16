

let currentIndex = 0;
const changeInterval = 5000; // 5000 milisegundos (5 segundos)

// Cambiar la imagen al hacer clic en la miniatura
function changeImage(index) {
    currentIndex = index;
    updateMainImage();
    highlightThumbnail(index);
}

// Cambiar la imagen con las flechas
function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateMainImage();
    highlightThumbnail(currentIndex);
}

// Actualizar la imagen grande con animación
function updateMainImage() {
    const imgElement = document.getElementById('large-image');

    // Agregar clase de "fade" para ocultar la imagen actual
    imgElement.classList.add('fade');

    // Esperar que termine la animación antes de cambiar la imagen
    setTimeout(() => {
        imgElement.src = images[currentIndex];
        imgElement.classList.remove('fade');
    }, 500); // Tiempo de duración de la animación de opacidad
}

// Resaltar la miniatura seleccionada
function highlightThumbnail(index) {
    // Desmarcar todas las miniaturas
    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach((thumbnail) => {
        thumbnail.style.transform = 'scale(1)';
        thumbnail.style.border = '2px solid transparent';
        thumbnail.classList.remove('margenes');

    });

    // Resaltar la imagen seleccionada
    const selectedThumbnail = document.getElementById(index);
    selectedThumbnail.style.transform = 'scale(1.1)';
    selectedThumbnail.classList.add('margenes');
    selectedThumbnail.style.border = '2px solid #007bff';
}

// Cambiar la imagen automáticamente cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage();
    highlightThumbnail(currentIndex);
}, changeInterval);
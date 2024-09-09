// Script básico para carrossel e funções temporais

let currentIndex = 0;
const images = document.querySelectorAll(".carousel img");

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000);

// Iniciar carrossel
document.addEventListener('DOMContentLoaded', () => {
    images.forEach((img, index) => {
        if (index !== 0) {
            img.style.display = 'none';
        }
    });
});

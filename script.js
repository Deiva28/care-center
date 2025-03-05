let index = 0;

function moveSlide(step) {
    const images = document.querySelector(".carousel-images");
    const totalImages = images.children.length;
    
    index += step;
    if (index >= totalImages) index = 0;
    if (index < 0) index = totalImages - 1;

    images.style.transform = `translateX(${-index * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

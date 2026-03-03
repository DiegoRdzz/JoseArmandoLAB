// SCROLL PARA IMAGENES DEL LIBRO
document.addEventListener('DOMContentLoaded', () => {
        const track = document.getElementById('sliderTrack');
        const dotsContainer = document.getElementById('sliderDots');
        const slides = track.querySelectorAll('.slide');
        
        // 1. Generar los puntos según cuantas fotos haya
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active'); // El primero empieza activo
            
            // Al hacer clic en el punto, deslizar a esa foto
            dot.addEventListener('click', () => {
                const slideWidth = slide.clientWidth;
                track.scrollTo({
                    left: slideWidth * index,
                    behavior: 'smooth'
                });
            });
            
            dotsContainer.appendChild(dot);
        });

        // 2. Detectar scroll para cambiar el punto activo
        track.addEventListener('scroll', () => {
            const scrollPosition = track.scrollLeft;
            const slideWidth = slides[0].clientWidth;
            
            // Calculamos qué slide está visible (redondeando)
            const activeIndex = Math.round(scrollPosition / slideWidth);
            
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
    });
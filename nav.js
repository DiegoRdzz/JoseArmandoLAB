// LLAMA AL MENU MEDIANTE FETCH

async function cargarMenu() {
  try {
    const response = await fetch("nav.html");
    const data = await response.text();
    document.getElementById("menu-container").innerHTML = data;
  } catch (error) {
    console.error(error);
  }
}

cargarMenu();


// MENU HAMBURGUESA

// Escuchamos todos los clics que ocurran en la página
document.addEventListener('click', (e) => {
    
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    // 1. LÓGICA DEL MENÚ HAMBURGUESA
    if (e.target.closest('#mobile-menu')) {
        if (navLinks && mobileMenu) {
            navLinks.classList.toggle('active');
            
            const icon = mobileMenu.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.remove('bi-list');
                icon.classList.add('bi-x-lg');
            } else {
                icon.classList.remove('bi-x-lg');
                icon.classList.add('bi-list');
            }
        }
    }

    // 2. LÓGICA DE LOS ENLACES (SCROLL SUAVE Y CERRAR MENÚ)
    const clickedLink = e.target.closest('#nav-links a');
    if (clickedLink) {
        
        // Obtener a dónde apunta el enlace (ej: "#sobreMi")
        const href = clickedLink.getAttribute('href');
        
        // Si el enlace es interno (empieza con # y no es solo "#")
        if (href && href.startsWith('#') && href !== '#') {
            
            // ¡AQUÍ ESTÁ LA MAGIA! Esto cancela que se ponga el # en la URL
            e.preventDefault(); 
            
            const destino = document.querySelector(href);
            if (destino) {
                // Hacemos el scroll suave restando 80px para que el menú no tape el título
                const posicion = destino.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: posicion,
                    behavior: 'smooth'
                });
            }
        }

        // Finalmente, cerramos el menú versión celular si está abierto
        if (navLinks && mobileMenu) {
            navLinks.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            if (icon) {
                icon.classList.remove('bi-x-lg');
                icon.classList.add('bi-list');
            }
        }
    }
});

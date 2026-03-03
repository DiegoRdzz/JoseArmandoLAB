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
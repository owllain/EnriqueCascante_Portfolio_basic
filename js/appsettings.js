function redireccionar() {
    // Reemplaza "" por la URL de la página a la que deseas redireccionar.
    window.location.href = "main.html";
  }
  
  document.getElementById("btnLogin").addEventListener("click", redireccionar);
  
  function cambiarCursor() {
    // Cambiar el cursor del botón a "pointer" cuando el mouse se posicione sobre él.
    document.getElementById("btnLogin").style.cursor = "pointer";
  }
  
  document.getElementById("btnLogin").addEventListener("click", redireccionar);
  document.getElementById("btnLogin").addEventListener("mouseover", cambiarCursor);
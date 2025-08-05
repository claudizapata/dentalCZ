// Simula la suspensión (esto sería controlado por tu lógica de backend)
  let isSuspended = true; // Cambia a false para mostrar el icono normal

  const whatsappIcon = document.querySelector('.whatsapp-icon');

  if (isSuspended) {
    whatsappIcon.classList.add('disabled');
  }

  
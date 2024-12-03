<template>
    <div class="button-container">
      <div
        class="button sport"
        @click="handleClick('SPORT')"
      >
        SPORT
      </div>
      <div
        class="button normal"
        @click="handleClick('NORMAL')"
      >
        NORMAL
      </div>
      <div
        class="button eco"
        @click="handleClick('ECO')"
      >
        ECO
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ModeButtons",
    methods: {
      handleClick(mode) {
        alert(`Has seleccionado el modo: ${mode}`);
        // Aquí puedes agregar más lógica, como actualizar el estado de la aplicación o enviar datos a una API.
      },
    },
  };
  </script>
  
  <style scoped>
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: #333; /* Fondo oscuro */
    padding: 20px;
    height: 100vh;
    justify-content: center;
  }
  
  .button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: black;
    border: 2px solid black;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  
  .button:hover {
    transform: scale(1.1);
  }
  
  .button.sport {
    background-color: #ff4d4d; /* Rojo */
  }
  
  .button.normal {
    background-color: #bebebe; /* Gris */
  }
  
  .button.eco {
    background-color: #4caf50; /* Verde */
  }
  </style>
  
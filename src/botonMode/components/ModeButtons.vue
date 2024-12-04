<template>
  <div class="flex column items-center">
    <!-- Encabezado reutilizado -->
    <PageHeader title="Telemetría" />

    <!-- Contenedor de botones (sin recuadro negro) -->
    <div class="buttons">
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
  </div>
</template>

<script>
import PageHeader from "src/shared/components/PageHeader.vue";

export default {
  name: "ModeButtons",
  components: {
    PageHeader,
  },
  methods: {
    handleClick(mode) {
      alert(`Has seleccionado el modo: ${mode}`);
      // Aquí puedes agregar más lógica, como actualizar el estado de la aplicación o enviar datos a una API.
    },
  },
};
</script>

<style scoped>
/* Contenedor general */
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Contenedor de los botones */
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; /* Mayor separación entre botones */
  padding: 20px;
  justify-content: center;
}

/* Estilos de los botones */
.button {
  width: 150px; /* Botones más grandes */
  height: 150px; /* Botones más grandes */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 20px; /* Texto más grande */
  font-weight: bold;
  color: black;
  border: 3px solid black;
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

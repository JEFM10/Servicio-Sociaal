<template>
  <div class="injection-time-screen">
    <!-- Reloj manual SVG -->
    <div class="clock-container">
      <svg class="clock" viewBox="0 0 100 100">
        <!-- Marco del reloj -->
        <circle cx="50" cy="50" r="48" stroke="white" fill="none" stroke-width="2" />
        <!-- Manecillas -->
        <line
          x1="50"
          y1="50"
          :x2="hourHand.x"
          :y2="hourHand.y"
          stroke="white"
          stroke-width="2"
        />
        <line
          x1="50"
          y1="50"
          :x2="minuteHand.x"
          :y2="minuteHand.y"
          stroke="white"
          stroke-width="1"
        />
        <line
          x1="50"
          y1="50"
          :x2="secondHand.x"
          :y2="secondHand.y"
          stroke="red"
          stroke-width="1"
        />
      </svg>
    </div>

    <!-- Campos de entrada para los tiempos de inyección -->
    <div class="injection-container">
      <div class="input-group">
        <label for="gas-injection">Tiempo de inyección a gas</label>
        <input
          id="gas-injection"
          type="number"
          placeholder="0.00"
          v-model.number="gasInjection"
        />
        <span>m/s</span>
      </div>

      <div class="input-group">
        <label for="fuel-injection">Tiempo de inyección a gasolina</label>
        <input
          id="fuel-injection"
          type="number"
          placeholder="0.00"
          v-model.number="fuelInjection"
        />
        <span>m/s</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: new Date(),
      gasInjection: 0.0, // Tiempo de inyección de gas en m/s
      fuelInjection: 0.0, // Tiempo de inyección de gasolina en m/s
    };
  },
  computed: {
    // Calcula la posición de las manecillas del reloj
    secondHand() {
      const angle = (this.currentTime.getSeconds() / 60) * 360 - 90;
      return {
        x: 50 + 40 * Math.cos((angle * Math.PI) / 180),
        y: 50 + 40 * Math.sin((angle * Math.PI) / 180),
      };
    },
    minuteHand() {
      const angle = (this.currentTime.getMinutes() / 60) * 360 - 90;
      return {
        x: 50 + 35 * Math.cos((angle * Math.PI) / 180),
        y: 50 + 35 * Math.sin((angle * Math.PI) / 180),
      };
    },
    hourHand() {
      const angle =
        ((this.currentTime.getHours() % 12) / 12) * 360 +
        (this.currentTime.getMinutes() / 60) * 30 -
        90;
      return {
        x: 50 + 25 * Math.cos((angle * Math.PI) / 180),
        y: 50 + 25 * Math.sin((angle * Math.PI) / 180),
      };
    },
  },
  mounted() {
    // Actualizar la hora del reloj cada segundo
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
};
</script>

<style scoped>
/* Contenedor principal */
.injection-time-screen {
  text-align: center;
  color: #fff;
  background-color: #1c1c1c;
  padding: 20px;
}

/* Reloj */
.clock-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.clock {
  width: 200px;
  height: 200px;
}

/* Contenedor de entradas */
.injection-container {
  padding: 20px;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.input-group label {
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
}

.input-group input {
  width: 100px;
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 4px;
  background: transparent;
  color: #fff;
  text-align: right;
}

.input-group span {
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
}
</style>

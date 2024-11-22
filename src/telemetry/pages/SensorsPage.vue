<template>
  <div class="pressure-screen">
    <!-- Campos de entrada para presiones -->
    <div class="pressure-container">
      <div class="input-group">
        <label for="gas-pressure">Presión de Gas</label>
        <input
          id="gas-pressure"
          type="number"
          placeholder="0.00"
          v-model.number="gasPressure"
        />
        <span>bar</span>
        <button @click="toggleGasPressure">
          {{ gasPressureEnabled ? "ON" : "OFF" }}
        </button>
      </div>

      <div class="input-group">
        <label for="map-pressure">Presión MAP</label>
        <input
          id="map-pressure"
          type="number"
          placeholder="0.00"
          v-model.number="mapPressure"
        />
        <span>bar</span>
        <button @click="toggleMapPressure">
          {{ mapPressureEnabled ? "ON" : "OFF" }}
        </button>
      </div>
    </div>

    <!-- Tacómetros -->
    <div class="tachometers">
      <div class="tachometer">
        <svg class="tachometer-svg" viewBox="0 0 100 100">
          <!-- Círculo exterior -->
          <circle cx="50" cy="50" r="45" stroke="white" fill="none" stroke-width="2" />
          <!-- Aguja -->
          <line
            x1="50"
            y1="50"
            :x2="tachometerPosition(gasPressure).x"
            :y2="tachometerPosition(gasPressure).y"
            stroke="red"
            stroke-width="2"
          />
        </svg>
        <p>Gas</p>
      </div>

      <div class="tachometer">
        <svg class="tachometer-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="white" fill="none" stroke-width="2" />
          <line
            x1="50"
            y1="50"
            :x2="tachometerPosition(mapPressure).x"
            :y2="tachometerPosition(mapPressure).y"
            stroke="blue"
            stroke-width="2"
          />
        </svg>
        <p>MAP</p>
      </div>

      <div class="tachometer">
        <svg class="tachometer-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="white" fill="none" stroke-width="2" />
          <line
            x1="50"
            y1="50"
            :x2="tachometerPosition(50).x"
            :y2="tachometerPosition(50).y"
            stroke="green"
            stroke-width="2"
          />
        </svg>
        <p>Otro</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gasPressure: 0.0, // Presión de gas en bar
      mapPressure: 0.0, // Presión MAP en bar
      gasPressureEnabled: false, // Estado del switch de presión de gas
      mapPressureEnabled: false, // Estado del switch de presión MAP
    };
  },
  methods: {
    // Alternar el estado del switch de presión de gas
    toggleGasPressure() {
      this.gasPressureEnabled = !this.gasPressureEnabled;
    },
    // Alternar el estado del switch de presión MAP
    toggleMapPressure() {
      this.mapPressureEnabled = !this.mapPressureEnabled;
    },
    // Calcula la posición de la aguja del tacómetro según el valor
    tachometerPosition(value) {
      const angle = (value / 100) * 180 - 90; // 180 grados representan 0 a 100
      return {
        x: 50 + 40 * Math.cos((angle * Math.PI) / 180),
        y: 50 + 40 * Math.sin((angle * Math.PI) / 180),
      };
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.pressure-screen {
  text-align: center;
  color: #fff;
  background-color: #1c1c1c;
  padding: 20px;
}

/* Contenedor de presiones */
.pressure-container {
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

.input-group button {
  margin-left: 10px;
  background-color: #444;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.input-group button:hover {
  background-color: #666;
}

/* Tacómetros */
.tachometers {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.tachometer {
  text-align: center;
}

.tachometer-svg {
  width: 100px;
  height: 100px;
}
</style>

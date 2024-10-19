<template>
  <div class="dashboard">
    <!-- Kilómetros restantes calculados -->
    <div class="km-container">
      <div class="km-indicator">
        <div class="km-number">{{ calculatedKilometers }} KM</div>
      </div>
      <div class="km-label">Kilómetros disponibles por recorrer</div>
    </div>

    <!-- Indicador de velocidad -->
    <div class="speed-container">
      <input v-model.number="speed" type="number" placeholder="Velocidad (KM/H)" />
      <span>KM/H</span>
    </div>

    <!-- Indicador de eficiencia de combustible -->
    <div class="fuel-efficiency">
      <input v-model.number="efficiency" type="number" placeholder="KM/L" />
      <span>KM/L</span>
    </div>

    <!-- Indicador de combustible -->
    <div class="gauge-container">
      <apexchart
        type="radialBar"
        height="250"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      speed: 100, // Velocidad inicial en KM/H
      efficiency: 15, // Eficiencia inicial en KM/L
      fuelCapacity: 50, // Capacidad del tanque de gasolina en litros
      fuelPercentage: 50, // Porcentaje de gasolina restante
      series: [50], // Serie que muestra el porcentaje de gasolina en el tacómetro
      chartOptions: {
        chart: {
          type: 'radialBar',
          offsetY: -10,
          background: '#333', // Fondo oscuro
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              size: '60%',
            },
            track: {
              background: '#fff',
              strokeWidth: '97%',
              margin: 5,
            },
            dataLabels: {
              name: {
                offsetY: 20,
                show: false,
              },
              value: {
                offsetY: 20,
                color: '#fff',
                fontSize: '24px',
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
        fill: {
          colors: ['#ff0000'],
        },
        stroke: {
          lineCap: 'round',
        },
        labels: ['Fuel'],
        colors: ['#FF4560'],
      },
    };
  },
  computed: {
    // Cálculo de kilómetros disponibles ajustados por la velocidad
    calculatedKilometers() {
      const adjustedEfficiency = this.efficiency / (1 + this.speed / 100); // Eficiencia ajustada por velocidad
      const fuelRemainingLiters = (this.fuelPercentage / 100) * this.fuelCapacity; // Litros de combustible restantes
      return (adjustedEfficiency * fuelRemainingLiters).toFixed(2); // Kilómetros calculados
    },
  },
};
</script>

<style scoped>
.dashboard {
  background-color: #1c1c1c; /* Fondo oscuro */
  color: white;
  text-align: center;
  padding: 20px;
}

.km-container {
  margin-bottom: 20px;
}

.km-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff0000;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}

.km-number {
  font-size: 32px;
  font-weight: bold;
  color: white;
}

.km-label {
  font-size: 16px;
  margin-top: 10px;
}

.fuel-efficiency, .speed-container {
  margin-top: 20px;
}

.fuel-efficiency input, .speed-container input {
  padding: 10px;
  font-size: 16px;
  width: 100px;
  text-align: center;
}

.fuel-efficiency span, .speed-container span {
  font-size: 16px;
  margin-left: 10px;
}

.gauge-container {
  margin-top: 30px;
}

.apexcharts-text {
  fill: white !important;
}
</style>

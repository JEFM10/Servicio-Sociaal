<template>
  <div class="tachometer-container">
    <canvas id="tachometer" ref="tachometerCanvas"></canvas>
     <input type="range" v-model="rpm" min="0" max="7000" @input="drawTachometer" step="100" />

    <!-- Termómetros con etiquetas -->
    <div class="thermometers">
      <div class="thermometer">
        <canvas id="thermometerGas" ref="thermometerGasCanvas"></canvas>
        <p>Temperatura gas</p>
      </div>
      <div class="thermometer">
        <canvas id="thermometerReductor" ref="thermometerReductorCanvas"></canvas>
        <p>Temperatura reductor</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rpm: 0, // Valor inicial de RPM
      gasTemp: 50, // Valor inicial de temperatura del gas
      reductorTemp: 30 // Valor inicial de temperatura del reductor
    };
  },
  mounted() {
    this.drawTachometer();
    this.drawThermometers();
  },
  methods: {
    drawTachometer() {
      const canvas = this.$refs.tachometerCanvas;
      const ctx = canvas.getContext('2d');
      const width = canvas.width = 300;
      const height = canvas.height = 300;
      const radius = Math.min(width, height) / 2 - 20;
      const rpm = this.rpm;
      const maxRPM = 7000;

      ctx.clearRect(0, 0, width, height);

      // Dibujar segmentos de colores (verde, amarillo, rojo)
      const drawSegment = (startAngle, endAngle, color) => {
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius, startAngle, endAngle, false);
        ctx.lineWidth = 15;
        ctx.strokeStyle = color;
        ctx.stroke();
      };

      const startAngle = Math.PI;
      const endAngle = 2 * Math.PI;
      drawSegment(startAngle, startAngle + (endAngle - startAngle) * 0.4, '#00ff00');
      drawSegment(startAngle + (endAngle - startAngle) * 0.4, startAngle + (endAngle - startAngle) * 0.7, '#ffff00');
      drawSegment(startAngle + (endAngle - startAngle) * 0.7, endAngle, '#ff0000');

      // Aguja
      const needleAngle = startAngle + (endAngle - startAngle) * (rpm / maxRPM);
      const needleLength = radius - 20;
      const needleX = width / 2 + needleLength * Math.cos(needleAngle);
      const needleY = height / 2 + needleLength * Math.sin(needleAngle);

      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2);
      ctx.lineTo(needleX, needleY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ff0000';
      ctx.stroke();

      // Centro de la aguja
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 10, 0, 2 * Math.PI);
      ctx.fillStyle = '#8b0000';
      ctx.fill();

      // Texto RPM
      ctx.font = '16px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(`${rpm} RPM`, width / 2, height / 2 + 80);
    },

    drawThermometers() {
      // Termómetro del gas
      const gasCanvas = this.$refs.thermometerGasCanvas;
      const gasCtx = gasCanvas.getContext('2d');
      const gasHeight = 150;
      const gasWidth = 50;
      gasCanvas.width = gasWidth;
      gasCanvas.height = gasHeight;

      const gasTemp = this.gasTemp;
      const maxTemp = 100;

      gasCtx.clearRect(0, 0, gasWidth, gasHeight);

      // Fondo del termómetro
      gasCtx.fillStyle = '#D3D3D3';
      gasCtx.fillRect(15, 10, 20, 130);

      // Nivel de temperatura
      const gasLevelHeight = (gasTemp / maxTemp) * 130;
      gasCtx.fillStyle = '#ff0000';
      gasCtx.fillRect(15, 140 - gasLevelHeight, 20, gasLevelHeight);

      // Termómetro del reductor
      const reductorCanvas = this.$refs.thermometerReductorCanvas;
      const reductorCtx = reductorCanvas.getContext('2d');
      const reductorTemp = this.reductorTemp;

      reductorCanvas.width = gasWidth;
      reductorCanvas.height = gasHeight;

      reductorCtx.clearRect(0, 0, gasWidth, gasHeight);

      // Fondo del termómetro
      reductorCtx.fillStyle = '#D3D3D3';
      reductorCtx.fillRect(15, 10, 20, 130);

      // Nivel de temperatura
      const reductorLevelHeight = (reductorTemp / maxTemp) * 130;
      reductorCtx.fillStyle = '#ff0000';
      reductorCtx.fillRect(15, 140 - reductorLevelHeight, 20, reductorLevelHeight);
    }
  }
};
</script>

<style scoped>
.tachometer-container {
  text-align: center;
  color: white;
}

canvas {
  background-color: #1d1d1d;
  border-radius: 50%;
}

.thermometers {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.thermometer {
  text-align: center;
}

.thermometers canvas {
  background-color: #1d1d1d;
  border-radius: 5px;
  padding: 10px;
}
</style>



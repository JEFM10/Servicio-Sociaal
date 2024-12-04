<template>
  <div class="flex column items-center">
    <!-- Encabezado reutilizado -->
    <PageHeader title="Telemetría" />
    
    <!-- Mapa y barra de búsqueda -->
    <div class="map-container">
      <!-- Barra de búsqueda -->
      <input
        type="text"
        v-model="searchQuery"
        @keyup.enter="searchLocation"
        placeholder="Buscar lugares"
        class="search-bar"
      />

      <!-- Contenedor del mapa -->
      <div id="map" style="height: 400px; width: 100%;"></div>
    </div>
  </div>
</template>

<script>
import PageHeader from "src/shared/components/PageHeader.vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

export default {
  name: "MapPage",
  components: {
    PageHeader,
  },
  data() {
    return {
      map: null, // Instancia del mapa de Leaflet
      searchQuery: "", // Entrada de búsqueda
      markers: [], // Lista de marcadores
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      this.map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
    },
    async searchLocation() {
      if (!this.searchQuery) return;

      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${this.searchQuery}`
        );

        if (response.data.length > 0) {
          const location = response.data[0];
          const lat = parseFloat(location.lat);
          const lon = parseFloat(location.lon);

          this.map.setView([lat, lon], 13);

          const marker = L.marker([lat, lon]).addTo(this.map);
          this.markers.push(marker);

          marker.bindPopup(`Ubicación: ${location.display_name}`).openPopup();
        } else {
          alert("No se encontró la ubicación");
        }
      } catch (error) {
        console.error("Error al buscar la ubicación:", error);
      }
    },
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style scoped>
.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  box-sizing: border-box;
}

#map {
  height: 400px;
  width: 100%;
}

.map-container {
  width: 100%;
  max-width: 1200px; /* Opcional: Limitar el ancho del mapa */
}
</style>


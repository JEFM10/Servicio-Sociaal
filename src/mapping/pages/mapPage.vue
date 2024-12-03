<template>
  <div class="flex column items-center">
    <PageHeader title="Telemetriaa" />
    
    <!-- Mapa y barra de búsqueda -->
    <div>
      <!-- Barra de búsqueda -->
      <input
        type="text"
        v-model="searchQuery"
        @keyup.enter="searchLocation"
        placeholder="Buscar lugares"
        class="search-bar"
      />

      <!-- Mapa -->
      <div id="map" style="height: 400px; width: 100%;"></div>
    </div>
  </div>
</template>

<script>
import PageHeader from 'src/shared/components/PageHeader.vue';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

export default {
  name: "MapPage",
  data() {
    return {
      map: null, // Instancia del mapa de Leaflet
      searchQuery: "", // Query de búsqueda
      markers: [], // Lista de marcadores creados
    };
  },
  mounted() {
    // Inicializar el mapa al montar el componente
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      // Crear el mapa en el div con id "map"
      this.map = L.map("map").setView([51.505, -0.09], 13);

      // Agregar la capa base (OpenStreetMap)
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

          // Centrar el mapa en la nueva ubicación
          this.map.setView([lat, lon], 13);

          // Agregar un marcador en la ubicación buscada
          const marker = L.marker([lat, lon]).addTo(this.map);
          this.markers.push(marker);

          // Opcional: Mostrar un popup con información
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
    // Limpiar el mapa y marcadores cuando se destruya el componente
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style>
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
</style>

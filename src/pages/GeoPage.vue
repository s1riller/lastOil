<template>
  <div>
    <div ref="map" class="map-container"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.map).setView([52.281273, 104.246619], 13); // Установите координаты и уровень масштабирования
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map); // Используйте плитку OpenStreetMap или другую плитку
    },
  },
};
</script>

<style scoped>
/* Добавьте стили для компонента здесь, если это необходимо */
.map-container {
  height: 80vh; /* Задайте высоту элемента в 100% высоты видимой области экрана (viewport height) */
}
</style>

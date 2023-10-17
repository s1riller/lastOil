<template>
  <img :src="Pic1" class="btnClass" alt="Btn Image" />
</template>

<script setup>
import Pic1 from '@/assets/Picture7.png';
</script>

<style scoped>
.btnClass {
  width: 100vw; /* Задаем ширину по размеру экрана (100vw) */
  height: auto; /* Автоматическая высота для сохранения пропорций */
  max-width: 100%; /* Устанавливаем максимальную ширину в 100% экрана */
}
</style>

<template>
  <div class="position-relative">
    <button type="button" class="btn btn-primary position-absolute ms-5 mb-5 btn-custom">
      <img :src="btnImage" :class="btnClass" alt="Btn Image"> <p class="text-dark">Карта</p>
    </button>
    <img :src="hydroImage" :class="imageClass" alt="Hydro Image">
    <div class="position-absolute bottom-0 end-0 bg-light custom-size d-flex flex-column justify-content-center align-items-center">
      <button class="btn btn-primary m-2 btn-custom">
        <img :src="btnDownload" :class="btnClass" alt="Btn Image" style="height: 16px; width: auto; margin-right: 8px;">
        <p class="text-dark d-inline">Импорт модели</p> 
      </button>
      
      <button class="btn btn-primary m-2 btn-custom">
        <img :src="btnEye" :class="btnClass" alt="Btn Image" style="height: 18px; width: auto; margin-right: 8px;">
        <p class="text-dark d-inline">Просмотр модели</p> 
      </button>
      
      <button class="btn btn-primary m-2 btn-custom">
        <img :src="btnCalc" :class="btnClass" alt="Btn Image" style="height: 18px; width: auto; margin-right: 8px;">
        <p class="text-dark d-inline">Данные расчета</p> 
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import hydroImage from '@/assets/Picture2.png';
import btnImage from '@/assets/free-icon-placeholder-117967.png';
import btnDownload from '@/assets/free-icon-save-file-3811490.png';
import btnEye from '@/assets/free-icon-open-eye-829117.png';
import btnCalc from '@/assets/free-icon-calculator-4064672.png';
const imageClass = computed(() => {
  if (window.innerWidth < 576) {
    return 'img-small';
  } else if (window.innerWidth < 992) {
    return 'img-medium';
  } else {
    return 'img-large';
  }
});

const btnClass = 'btn-image'; // Новый класс для изображения в кнопке
</script>
<style scoped>
.custom-size {
  width: 410px; /* Здесь можно задать желаемую ширину элемента */
  height: 320px; /* Здесь можно задать желаемую высоту элемента */
}

.btn-image {
  width: 50px; /* Здесь можно задать желаемую ширину */
  height: auto; /* Автоматическая высота для сохранения пропорций */
}

.img-small {
  max-width: 100%;
  height: auto;
}

.img-medium {
  max-width: 50%;
  height: auto;
}

.img-large {
  max-width: 100%;
  height: auto;
}
</style>

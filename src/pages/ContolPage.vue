<template>
  <div class="bg-body-secondary vh-100 position-relative">
    <img :src="Pic1" class="btnClass position-absolute top-0 start-0 w-50 h-50 p-5" alt="Btn Image" />
    <img :src="Pic2" class="btnClass position-absolute top-0 end-0 w-50 h-50 p-5" alt="Btn Image" />
    <img :src="Pic3" class="btnClass position-absolute bottom-0 start-0 w-50 h-50 p-5" alt="Btn Image" />
    <img :src="Pic4" class="btnClass position-absolute bottom-0 end-0 w-50 h-50 p-5" alt="Btn Image" />
  </div>
</template>

<script setup>
import Pic1 from '@/assets/Picture3.png';
import Pic2 from '@/assets/Picture4.png';
import Pic3 from '@/assets/Picture5.png';
import Pic4 from '@/assets/Picture6.png';
</script>

<style scoped>
.btnClass {
  width: 600px;
  height: auto;
}
</style>

<template>
  <div class="px-3 py-2 text-bg-gray border-bottom  discord-purple">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">

          <li class="scale">
            <router-link class="nav-link text-dark" to="Mining">

              <img src="@/components/icons/petroleum.png" class="icon"> <br/>
              Добыча

            </router-link>
          </li>
          <li class="scale">
            <router-link class="nav-link text-dark" to="Recycle">
              <img src="@/components/icons/barrel.png" class="icon"> <br/>
              Переработка
            </router-link>
          </li>
          <li class="scale">
            <router-link class="nav-link text-dark" to="Control">
              <img src="@/components/icons/tablet.png" class="icon"> <br/>
              Управление
            </router-link>
          </li>
          <li class="scale">
            <router-link class="nav-link text-dark" to="Hydro">
              <img src="@/components/icons/hydraulic.png" class="icon"> <br/>
              Гидродинамика
            </router-link>
          </li>
          <li class="scale">
            <router-link class="nav-link text-dark" to="Geo">
              <img src="@/components/icons/geo.png" class="icon"> <br/>
              Георазведка
            </router-link>
          </li>
          <!-- <li class="scale">
            <a href="#" class="nav-link text-dark">
              <img src="@/components/icons/info.png" class="icon"> <br/>
              Инфо
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>

<style>
.icon{
  width: auto;
  height: 48px;
}
.scale {
  transition: 1s; /* Время эффекта */
  border-radius: 10%; /* Делаем элемент круглым */
}
.scale:hover {
  transform: scale(1.5) translateY(3px); /* Увеличиваем масштаб */

  background:#ffffff

}





.discord-purple{
  background-color: #7289da;
}
</style>

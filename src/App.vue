<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>


    <nav class="">
        <ul class="h-menu d-flex flex-row">
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/programas">Programas</RouterLink></li>
            <li><RouterLink to="/contacto">Contacto</RouterLink></li>
            <li><RouterLink to="/donaciones">Donaciones</RouterLink></li>
            <!-- <li class="card skill-box w-25 d-flex flex-row m-0 p-0 h-1">
                <div class="header bg-orange fg-white m-0">
                    <img src="https://images.zeno.fm/3FMvCv9I4slixhyYSl2NgwO8SbPMMRWDYgDAKgnxGKk/rs:fit:170:170/g:ce:0:0/aHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2Q1NDVlYjQ2LTEwMzUtNGI0Ny04MDEwLWJmYTA2Zjg4Yjk1Zi9pbWFnZS8.webp?u=Thu Sep 15 21:12:14 UTC+0000 2022" class="avatar">
                    <div class="subtitle">Faradio Radio</div>
                </div>
                <audio
                data-role="audio-player" 
                data-src="https://stream-063.zeno.fm/0oqho6gdttbuv?zs=p6hil2U7TYCeWhToyJnGJw"
                data-show-loop="false"
                data-show-stop="false"
                data-show-info="false"
                data-volume=".1"
                ></audio>
        </li> -->
        </ul>

    </nav>

    <div class="card skill-box w-25">
        <div class="header bg-orange fg-white m-0">
            <img src="https://images.zeno.fm/3FMvCv9I4slixhyYSl2NgwO8SbPMMRWDYgDAKgnxGKk/rs:fit:170:170/g:ce:0:0/aHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2Q1NDVlYjQ2LTEwMzUtNGI0Ny04MDEwLWJmYTA2Zjg4Yjk1Zi9pbWFnZS8.webp?u=Thu Sep 15 21:12:14 UTC+0000 2022" class="avatar">
            <div class="title">Faradio Radio</div>
            <div class="subtitle">Proyecto autodidacta de radio multimedios</div>
        </div>
                <audio
                data-role="audio-player" 
                data-src="https://stream-063.zeno.fm/0oqho6gdttbuv?zs=p6hil2U7TYCeWhToyJnGJw"
                data-show-loop="false"
                data-show-stop="false"
                data-show-info="false"
                data-volume=".1"
                ></audio>
    </div>

  </header>

  <RouterView />

  <footer class="text-center fg-white">
    <p>Copyright 2023 - Todos los derechos reservados</p>
</footer>

</template>

<style scoped>

</style>

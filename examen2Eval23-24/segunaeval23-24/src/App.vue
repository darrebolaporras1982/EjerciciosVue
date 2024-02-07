<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/favoritos">Favoritos</RouterLink>
        <RouterLink to="/servicios">Servicios</RouterLink>
        <RouterLink to="/pabellones">Servicios Pabellones</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

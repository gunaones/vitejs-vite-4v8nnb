<script setup>
import Navbar from './Navbar.vue';
</script>
<template lang="pug">
Navbar
.container-fluid
  slot
  .copyright Copyright &copy; 2022
</template>

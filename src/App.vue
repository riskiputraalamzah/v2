<script setup>
import Navbar from "./components/Navbar.vue";
import HeroContent from "./components/HeroContent.vue";
import { ref, provide } from "vue";

let dark = ref(false);
const updateTheme = () => {
  dark.value = !dark.value;
};
provide("theme", { dark, updateTheme });
</script>
<template>
  <Navbar />
  <div class="container">
    <HeroContent />
  </div>
</template>

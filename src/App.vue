<script setup>
import Navbar from "./components/Navbar.vue";
import HeroContent from "./components/HeroContent.vue";
import { ref, provide } from "vue";

let dark = ref(false);

const updateTheme = (value = null) => {
  dark.value = value != null ? value : !dark.value;
  return dark.value;
};

const body = document.body;
const changeTheme = (dark) => {
  body.removeAttribute("class");
  body.classList.add(dark ? "bg-dark" : "bg-light");
};
const cekTheme = () => {
  let isDark = dark.value;
  if ("dark" in localStorage) {
    const currentTheme = localStorage.getItem("dark");
    isDark = currentTheme == "true";
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      isDark = true;
    }
  }
  updateTheme(isDark);
  changeTheme(isDark);
};

const saveTheme = (dark) => {
  localStorage.setItem("dark", dark);
};

cekTheme();
provide("theme", { dark, updateTheme, changeTheme, saveTheme });
</script>
<template>
  <Navbar />
  <div class="container">
    <HeroContent />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import HeroContent from "./components/HeroContent.vue";
import { ref, provide, reactive, shallowRef } from "vue";
import About from "./components/About.vue";
import { computed } from "@vue/reactivity";

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

let activeComponent = reactive({
  name: "home",
  component: shallowRef(HeroContent),
});

const changeComponent = (component) => {
  const myComponent = {
    home: HeroContent,
    about: About,
  };
  if (component in myComponent) {
    activeComponent.name = component;
    activeComponent.component = myComponent[component];
  } else {
    activeComponent.name = "home";
    activeComponent.component = HeroContent;
  }
};
const getComponent = computed(() => {
  return activeComponent;
});
// console.log(activeComponent.value);
cekTheme();
provide("theme", { dark, updateTheme, changeTheme, saveTheme });
provide("data", {
  changeComponent,
  getComponent,
});
</script>
<template>
  <Navbar />
  <div class="container mb-lg-0 mb-5">
    <transition name="scale" mode="out-in">
      <component :is="activeComponent.component"></component>
    </transition>
  </div>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>

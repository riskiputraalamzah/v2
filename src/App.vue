<script setup>
import { ref, provide, reactive, shallowRef, defineAsyncComponent } from "vue";
import { computed } from "@vue/reactivity";
import Navbar from "./components/Navbar.vue";
import HeroContent from "./components/HeroContent.vue";
const About = defineAsyncComponent(() => import("./components/About.vue"));
const Projects = defineAsyncComponent(() =>
  import("./components/Projects.vue")
);
const Skill = defineAsyncComponent(() => import("./components/Skill.vue"));
const Blogs = defineAsyncComponent(() => import("./components/Blogs.vue"));
const Contact = defineAsyncComponent(() => import("./components/Contact.vue"));

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
    projects: Projects,
    blogs: Blogs,
    skill: Skill,
    contacts: Contact,
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
  <div :class="['container mb-lg-0 mb-5', dark ? 'text-light' : 'text-dark']">
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
  /* transform: scale(0.9); */
}
</style>

<script setup>
import { inject, ref } from "vue";
const { dark, updateTheme, changeTheme, saveTheme } = inject("theme");
const { changeComponent, getComponent } = inject("data");
const animate = ref(false);
let runningAnimate = 0;
const toggleTheme = (event) => {
  if (runningAnimate > 0) return false;
  runningAnimate = 1;
  animate.value = !animate.value;

  setTimeout(() => {
    const dark = updateTheme();
    changeTheme(dark);

    saveTheme(dark);
  }, 1000);

  setTimeout(() => {
    animate.value = !animate.value;
    runningAnimate = 0;
  }, 2000);
};
const activeClass = getComponent.value;

const menus = [
  { name: "Home", bind: "home" },
  { name: "About", bind: "about" },
  { name: "Skill", bind: "skill" },
  { name: "Projects", bind: "projects" },
  { name: "Blogs", bind: "blogs" },
  { name: "Contacts", bind: "contacts" },
];
</script>
<template>
  <nav
    :class="[
      'navbar navbar-expand-lg fixed-top',
      dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light',
    ]"
  >
    <div class="container justify-content-between">
      <a class="navbar-brand fs-1 fw-bold color-primary" href="#">putra</a>
      <div
        @click="toggleTheme"
        :class="[
          'theme d-flex d-lg-none m-0',
          dark ? 'shadow-light' : 'shadow',
          animate ? (dark ? 'animate dark' : 'animate light') : '',
        ]"
      >
        <i :class="['fas text-warning', dark ? 'fa-moon' : 'fa-sun']"></i>
      </div>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div
        :class="['collapse navbar-collapse', dark ? 'bg-dark' : 'bg-light']"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li
            v-for="(menu, i) in menus"
            :key="i"
            class="nav-item mx-md-3 mx-0 mt-3 mt-md-0 ml-0 mt-0"
          >
            <a
              :class="[
                'nav-link',
                activeClass.name == menu.bind ? 'active' : '',
              ]"
              @click="changeComponent(menu.bind)"
              v-text="menu.name"
            ></a>
          </li>
        </ul>

        <div
          @click="toggleTheme($event.target)"
          :class="[
            'theme d-none d-lg-flex',
            dark ? 'shadow-light' : 'shadow',
            animate ? (dark ? 'animate dark' : 'animate light') : '',
          ]"
        >
          <i :class="['fas text-warning', dark ? 'fa-moon' : 'fa-sun']"></i>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar .nav-link {
  font-family: var(--fontLogo);
  font-size: 22px;
  cursor: pointer;
}

.shadow-light {
  box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.15) !important;
}
.theme {
  width: 50px;
  position: relative;
  height: 50px;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-size: 25px;
  margin-left: 10rem;
}
.theme::after {
  content: "";
  transition: background 1s ease-in-out, 1s ease-in-out;
  position: absolute;
  inset: 0;
  background-color: transparent;
  border-radius: 50%;
}
.theme.animate::after {
  animation: scaling 2s ease-in-out;
  z-index: 99999999999999999;
  transform: scale(1);
}
.theme.animate.light::after {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
.theme.animate.dark::after {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}
@keyframes scaling {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(100);
  }

  100% {
    transform: scale(1);
  }
}

@media (max-width: 992px) {
  #navbarSupportedContent {
    display: block;
    position: fixed;
    z-index: 2;
    bottom: 0;
    right: 0;
    left: 0;
    /* box-shadow: 0 1rem 3rem rgba(255, 255, 255, 0.175) !important; */
  }
  #navbarSupportedContent .navbar-nav {
    flex-direction: row;
    justify-content: space-evenly;
  }
  #navbarSupportedContent .navbar-nav .nav-link {
    font-size: calc(16px + 0.75vw);
  }
}
</style>

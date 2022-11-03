<script setup>
import { inject } from "vue";

const { dark } = inject("theme");
</script>
<template>
  <div class="hero-content">
    <div class="row justify-content-around">
      <div
        :class="[
          'col-lg-4 col-sm-6 col-4 d-sm-block d-none item item-profession',
          dark ? 'text-light' : 'text-dark',
        ]"
      >
        <div class="fw-bold display-1 mt-md-5 mt-0 one">Web Dev</div>
        <div class="d-flex align-items-center two">
          <div class="beginner">
            <span class="fs-1 fw-light opacity-50 two">BEGINNER</span>
            <span class="fw-bold fs-2">'s</span>
          </div>

          <div class="text-beginner three">
            <span class="fs-1">&squf;</span>
            <div>Become a Pro Web Developer</div>
          </div>
        </div>
      </div>
      <div
        :class="[
          'col-lg-4 col-sm-6 col-8 item middle-content',
          dark ? 'text-light' : 'text-dark',
        ]"
      >
        <div class="blob">
          <div class="fw-bold display-1 mt-md-5 mt-0 one">Web<br />Dev</div>
          <div class="beginner two">
            <span class="fs-1 fw-light opacity-50">BEGINNER</span>
            <span class="fw-bold fs-2">'s</span>
          </div>
          <div class="text-beginner three">
            <span class="fs-1">&squf;</span>
            <div>Become a Pro Web Developer</div>
          </div>
          <img src="/my-photo.png" alt="my photo" class="img-fluid my-photo" />
        </div>
        <!-- <img src="/blob-haikei.png" class="img-fluid blob" alt="blob" /> -->
      </div>
      <div
        :class="[
          'col-lg-4 col-12 item item-information d-flex flex-column justify-content-center',
          dark ? 'text-light' : 'text-dark',
        ]"
      >
        <div class="ps-lg-5 ps-0 pb-5 pb-lg-0">
          <div class="fs-5 color-primary fw-semibold mb-3">
            Halo semua 👋 , Saya
          </div>
          <div class="display-4 fw-bold lh-1 mb-3">Riski Putra Alamzah</div>
          <div class="mb-4">
            Seorang manusia biasa yang senantiasa mencoba dalam segala cobaan
            yang sedang dicoba sampai cobaan tersebut berlalu sendiri dan
            akhirnya tidak akan berani tuk mencoba 🤣
          </div>

          <button class="border-0 py-2 px-4 primary-bg text-light rounded-pill">
            Hubungi Saya
          </button>

          <button class="py-2 px-4 ms-4 primary-outline-bg rounded-pill">
            Get CV
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-content {
  margin-top: 8rem;
}
.middle-content,
.middle-content img {
  position: relative;
}
/* .middle-content img.blob {
  position: absolute;
  top: 150px;
  transform: scale(1.5);
  left: 0;
  z-index: 1;
} */
.middle-content img {
  z-index: 2;
}

.hero-content .blob {
  position: relative;
}
.hero-content .blob::before {
  content: "";
  position: absolute;
  width: 300px;
  top: 50%;
  height: 300px;
  background-color: var(--primary);
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
/* .middle-content .child {
  width: 50px;
  position: absolute;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
}
.middle-content .child:nth-child(1) {
  top: 100px;
  left: 5%;
} */
.beginner {
  transform: rotate(-90deg) translate(-100px, -150%);
}
.text-beginner {
  transform: translate(-100px, 120px);
  display: flex;
  align-items: baseline;
}
.text-beginner span {
  color: var(--primary);
  transform: translateY(6px);
  margin-right: 5px;
}
</style>

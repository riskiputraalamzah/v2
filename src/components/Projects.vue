<script setup>
import data from "../data/projects.json";
</script>
<template>
  <div class="margin-component pt-5">
    <div class="display-4 text-center mb-3 fw-bold">Projects</div>
    <div class="text-center">
      Berikut beberapa project yang telah saya kerjakan
    </div>

    <div class="row justify-content-center py-5">
      <div
        class="col-xl-3 col-lg-4 col-md-6"
        style="padding-bottom: 5rem"
        v-for="(d, i) in data"
        :key="i"
      >
        <div class="card bg-transparent border-0 h-100">
          <img
            loading="lazy"
            :src="'/images/projects/' + d.img"
            class="card-img-top"
            :alt="d.name"
          />
          <div class="card-body text-center">
            <p class="card-title two-line font-logo fs-2" v-text="d.name"></p>
          </div>
        </div>
        <div class="card-footer text-center">
          <button class="py-1 px-3 primary-bg border-0 text-light rounded-pill">
            Detail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.two-line {
  line-height: 35px;
  overflow: hidden;

  /*The problematic part is below*/
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

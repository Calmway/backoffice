<template>
  <div class="regular_layout_wrapper">
    <side-bar @sideBarToggled="sideBarToggled" v-if="$route.name !== 'login'" :class="sibebarMinimized ? 'miniSideBar' : 'maxSideBar'" />
    <div class="content_component" :class="sibebarMinimized ? 'full-size' : 'cuted-size'">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SideBar from './components/SideBar.vue';
const sibebarMinimized = ref(false);
function sideBarToggled() {
  sibebarMinimized.value = !sibebarMinimized.value
}
</script>

<style lang="scss" scoped>
.regular_layout_wrapper {
  display: flex;
}

.side_bar_component {
  background: beige;

  &.maxSideBar {
    width: 10%;
  }

  &.miniSideBar {
    width: 3%;
  }

  .side_bar_header {
    text-align: end;
  }
}

.content_component {
  width: 100%;
  padding: 0 20px;
  background: grey;

  &.full-size {
    width: 97%;
  }
}
</style>
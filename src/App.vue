<template>
  <div id="app">
    <nav-bar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar },
  created() {
    window.addEventListener("load", function() {
      document.body.classList.remove("preload");
    });
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.fade-enter {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

<template>
  <div class="container" :class="{ narrow, fullHeight, wide }">
    <div class="container__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    narrow: Boolean,
    wide: Boolean,
    fullHeight: Boolean
  }
};
</script>

<style>
.container {
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
}

.container.wide {
  max-width: 1250px;
}

.container.narrow {
  max-width: 600px;
}

.container.fullHeight {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container.fullHeight .container__wrapper {
  width: 100%;
}
</style>

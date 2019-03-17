<template>
  <div class="image-gallery">
    <div class="image-gallery__left" @click="prevImage" />
    <img
      class="image-gallery__img"
      :class="{ 'image-gallery__img--show': index === visible }"
      :key="img"
      v-lazy="img"
      v-for="(img, index) in images"
    />
    <div class="image-gallery__right" @click="nextImage" />
  </div>
</template>

<script>
export default {
  props: {
    images: Array
  },
  data() {
    return {
      visible: 0
    };
  },
  methods: {
    nextImage() {
      this.visible =
        this.visible === this.images.length - 1 ? 0 : this.visible + 1;
    },
    prevImage() {
      this.visible =
        this.visible === 0 ? this.images.length - 1 : this.visible - 1;
    }
  }
};
</script>

<style>
.image-gallery {
  position: relative;
  height: 300px;
}

@media (min-width: 800px) {
  .image-gallery {
    position: relative;
    height: 600px;
  }
}

.image-gallery__left {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  cursor: url("../assets/icons/arrow-left.svg"), auto;
  z-index: 999;
}

.image-gallery__right {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  cursor: url("../assets/icons/arrow-right.svg"), auto;
  z-index: 999;
}

.image-gallery__img {
  position: absolute;
  object-fit: cover;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  transition: all 0.8s ease;
  opacity: 0;
  transform: translateY(50px);
}

.image-gallery__img--show {
  z-index: 998;
}

.image-gallery__img--show[lazy="loaded"] {
  opacity: 1;
  transform: translateY(0px);
}
</style>

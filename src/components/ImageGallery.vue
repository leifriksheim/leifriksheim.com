<template>
  <div>
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
    <div class="image-gallery__mobile-toolbar">
      <Icon name="arrow-left" @click.native="prevImage" />
      <span>{{ visible + 1 }} / {{ images.length }}</span>
      <Icon name="arrow-right" @click.native="nextImage" />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  components: { Icon },
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

.image-gallery__mobile-toolbar {
  width: 100%;
  height: 20px;
  color: black;
  z-index: 1000;
  margin-top: var(--space-4);
  padding-left: var(--space-4);
  padding-right: var(--space-4);
  bottom: calc(var(--space-5) * -1);
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image-gallery__mobile-toolbar svg {
  font-size: 1.2em;
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
}

.image-gallery__img--show {
  z-index: 998;
}

.image-gallery__img--show[lazy="loaded"] {
  opacity: 1;
}

@media (min-width: 800px) {
  .image-gallery {
    position: relative;
    height: 600px;
  }

  .image-gallery__mobile-toolbar {
    display: none;
  }
}
</style>

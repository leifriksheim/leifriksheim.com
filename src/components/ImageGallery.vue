<template>
  <div class="image-gallery">
    <div ref="carousel" class="image-gallery__container">
      <div
        class="image-gallery__img-container"
        :data-slide="index + 1"
        v-for="(img, index) in images"
        :key="img"
      >
        <img class="image-gallery__img" v-lazy="img" />
      </div>
    </div>
    <div class="image-gallery__toolbar">
      <Icon
        :class="{ disabled: activeSlide === 1 }"
        name="arrow-left"
        @click.native="prevImage"
      />
      <span>{{ activeSlide }} / {{ images.length }}</span>
      <Icon
        :class="{ disabled: activeSlide === images.length }"
        name="arrow-right"
        @click.native="nextImage"
      />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  components: { Icon },
  data: function() {
    return {
      activeSlide: 1
    };
  },
  props: {
    images: Array
  },
  mounted() {
    const carousel = this.$refs.carousel;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const slideNum = parseInt(entry.target.dataset.slide);
        const isNotActiveSlide = this.activeSlide !== slideNum;

        if (entry.intersectionRatio >= 0.4 && isNotActiveSlide) {
          this.activeSlide = slideNum;
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      }
    );

    setTimeout(() => {
      [...carousel.querySelectorAll(".image-gallery__img-container")].forEach(
        el => {
          observer.observe(el);
        }
      );
    }, 100);
  },
  methods: {
    nextImage() {
      this.scrollTo(this.activeSlide + 1);
    },
    prevImage() {
      this.scrollTo(this.activeSlide - 1);
    },
    scrollTo(slideNumber) {
      const carousel = this.$refs.carousel;
      const item = carousel.querySelector(`[data-slide="${slideNumber}"]`);
      if (item) {
        carousel.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
        this.activeSlide = slideNumber;
      }
    }
  }
};
</script>

<style>
.image-gallery__container {
  position: relative;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  height: 40vh;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

@media (min-width: 800px) {
  .image-gallery__container {
    height: 85vh;
  }
}

.image-gallery__container::-webkit-scrollbar {
  display: none;
}

.image-gallery__toolbar {
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

.image-gallery__toolbar svg {
  font-size: 1.2em;
  cursor: pointer;
}

.image-gallery__toolbar .disabled svg {
  opacity: 0.2;
  cursor: initial;
}

.image-gallery__img-container {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  align-self: center;
  height: intrinsic;
  scroll-snap-align: center;
}

.image-gallery__img {
  margin: 0 auto;
  background: none;
  width: auto;
  object-fit: contain;
  height: 100%;
  transition: all 0.8s ease;
  opacity: 0;
}

.image-gallery__img[lazy="loaded"] {
  opacity: 1;
}

@media (min-width: 800px) {
  .image-gallery__container {
    position: relative;
  }
}
</style>

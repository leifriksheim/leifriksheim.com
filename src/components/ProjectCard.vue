<template>
  <router-link class="project-card" :to="`/project/${slug}`">
    <div
      :style="`background-color: ${backgroundColor}`"
      class="project-card__img"
    >
      <img :src="url" />
    </div>
    <Block>
      <div class="project-card__content">
        <h2 class="h5">{{ title }}</h2>
        <p class="p">{{ ingress }}</p>
      </div>
    </Block>
  </router-link>
</template>

<script>
import Block from "./Block";

export default {
  components: { Block },
  props: {
    backgroundColor: {
      default: "#fff",
      type: String
    },
    url: String,
    title: String,
    ingress: String,
    slug: String
  }
};
</script>

<style>
.project-card {
  display: block;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: var(--color-darkest);
  text-decoration: none;
  justify-content: flex-start;
  margin-bottom: var(--space-6);
}

.project-card__content {
  font-size: 0.9em;
  padding-top: var(--space-3);
}

.project-card__img {
  height: 100%;
  width: 100%;
  max-height: 150px;
  max-width: 150px;
  border-radius: 10px;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.project-card:hover .project-card__img {
  transform: translateY(-5px);
  box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.08);
}

.project-card__img img {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: block;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
}
</style>

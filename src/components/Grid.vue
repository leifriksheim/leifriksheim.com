<template>
  <div class="grid" :class="{ equal }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    equal: Boolean
  }
};
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--space-4) * -1) !important;
  margin-right: calc(var(--space-4) * -1) !important;
}

.grid.equal > * {
  display: flex;
}

.grid > * {
  width: 50%;
  margin-bottom: var(--space-6);
}

.grid > * {
  flex-basis: 100%;
  max-width: 100%;
  padding-left: var(--space-4) !important;
  padding-right: var(--space-4) !important;
}

@media (min-width: 500px) {
  .grid > * {
    flex-basis: 50%;
    max-width: 50%;
  }
}

@media (min-width: 800px) {
  .grid > * {
    flex-basis: 50%;
    max-width: 50%;
  }
}
</style>

<template>
  <span class="icon-wrapper" :class="{ round }">
    <svg class="icon" :class="{ small }">
      <use v-bind="{ 'xlink:href': `${icons}#${name}` }"></use>
    </svg>
  </span>
</template>

<script>
import icons from "@/assets/icons/feather-sprite.svg";

export default {
  props: {
    name: String,
    round: Boolean,
    small: Boolean
  },
  data() {
    return {
      icons
    };
  }
};
</script>

<style>
.icon-wrapper {
  display: inline-block;
}

.icon-wrapper.round {
  border-radius: 50%;
  background: #eee;
  padding: 1em;
  display: inline-block;
}

.icon {
  width: 1em;
  height: 1em;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none !important;
}

.icon.small {
  width: 0.8em;
  height: 0.8em;
}
</style>

<template>
  <div
    class="block"
    :class="[
      { full: full },
      `pt-${pt}`,
      `pb-${pb}`,
      `mt-${mt}`,
      `mb-${mb}`,
      `mb-neg-${mbMin}`,
      `mt-neg-${mtMin}`
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    full: Boolean,
    pt: {
      type: Number,
      default: 0
    },
    pb: {
      type: Number,
      default: 0
    },
    mt: {
      type: Number,
      default: 0
    },
    mb: {
      type: Number,
      default: 0
    },
    mtMin: {
      type: Number,
      default: 0
    },
    mbMin: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
.block {
  padding-left: var(--space-4);
  padding-right: var(--space-4);
  position: relative;
}

.block.full {
  padding-left: 0;
  padding-right: 0;
}

@for $i from 1 to 7 {
  .block.pt-$i {
    padding-top: var(--space-$(i));
  }
  .block.pb-$i {
    padding-bottom: var(--space-$(i));
  }
  .block.mt-$i {
    margin-top: var(--space-$(i));
  }
  .block.mb-$i {
    margin-bottom: var(--space-$(i));
  }
  .block.mt-neg-$i {
    margin-top: calc(var(--space-$(i)) * -1);
  }
  .block.mb-neg-$i {
    margin-bottom: calc(var(--space-$(i)) * -1);
  }
}
</style>

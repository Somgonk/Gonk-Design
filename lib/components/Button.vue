<template>
  <button>
    <slot></slot>
    hehe
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    kind: {
      type: String,
      
    }
  }
};
</script>

<style src="../colors.css" />
<style scoped>

</style>
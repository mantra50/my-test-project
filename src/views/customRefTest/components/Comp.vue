<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps({
  msgs: {
    type: Array,
    default: () => []
  }
})

watch(
  () => props.msgs,
  (v) => {
    console.info("The 'msgs' was changed in %cChild", 'color: red', v) // It will work!
  },
  { deep: true }
)
</script>

<template>
  {{ msgs }}
</template>

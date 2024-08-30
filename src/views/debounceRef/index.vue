<template>
  <div>
    <input class="border-2 p-1" type="text" v-model="text" />
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { debounceRef } from './debounceRef'

/**
  当使用 customRef 时，我们应该谨慎对待其 getter 的返回值，尤其是在每次运行 getter 时都生成新对象数据类型的情况下。当这样的 customRef 作为 prop 传递时，将影响父组件和子组件之间的关系。

  父组件的渲染函数可能会被其他的响应式状态变化触发。在重新渲染过程中，我们会重新评估 customRef 的值，并返回一个新的对象数据类型作为子组件的 prop。这个 prop 会与其上一个值进行比较，由于两者不同，子组件中 customRef 的响应式依赖将被触发。与此同时，因为没有调用 customRef 的 setter，父组件中的响应式依赖不会运行。
 */
const text = debounceRef('123')
console.log(text)
</script>

<style scoped></style>

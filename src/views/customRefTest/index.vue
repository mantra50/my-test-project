<script setup lang="ts">
import { customRef, ref, watch } from 'vue'
import Comp from './components/Comp.vue'

const proxy = ref(['foo', 'bar'])

const msgs = customRef((track, trigger) => ({
  get() {
    track()
    return proxy.value.reduce((acc, i) => {
      acc.push(i)
      return acc
    }, [])
  },
  set(v) {
    trigger()
    proxy.value = v
  }
}))

// counter
const counter = ref(0)

watch(
  msgs,
  (v) => {
    console.info("The 'msgs' changed in %cApp", 'color: blue', v) // It won't work!
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <div class="wrapper">
    <button class="border-2 px-1 bg-slate-200 rounded-md" type="button" @click="counter++">Add {{ counter }}</button>
    <Comp :msgs="msgs"></Comp>
  </div>
  <div class="w-1/3 m-auto mt-6 text-xl bg-gray-50 p-4 border-yellow-200 border-2 rounded-md text-slate-700">
    当使用 customRef 时，我们应该谨慎对待其 getter 的返回值，尤其是在每次运行
    getter时都生成新对象数据类型的情况下。当这样的 customRef 作为 prop 传递时，将影响父组件和子组件之间的关系。
    父组件的渲染函数可能会被其他的响应式状态变化触发。在重新渲染过程中，我们会重新评估 customRef
    的值，并返回一个新的对象数据类型作为子组件的 prop。这个 prop 会与其上一个值进行比较，由于两者不同，子组件中
    customRef 的响应式依赖将被触发。与此同时，因为没有调用 customRef 的 setter，父组件中的响应式依赖不会运行。
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

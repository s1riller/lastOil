<template>
  <div class="node">
    <!-- Содержимое узла -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Node',
  import { VueFlow, useVueFlow } from '@vue-flow/core'

const initialNodes = ref([
  {
    id: '1',
    position: { x: 50, y: 50 },
    label: 'Node 1',
  }
])
const { addNodes } = useVueFlow({
  nodes: initialNodes,
})

onMounted(() => {
  // Add an element after mount
  addNodes([
    {
      id: '2',
      position: { x: 150, y: 50 },
      label: 'Node 2',
    }
  ])
})
}

</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>
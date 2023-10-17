<script setup>
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { ref } from 'vue'
import { MarkerType, Position } from '@vue-flow/core'

const { onConnect, addEdges } = useVueFlow()
import { Panel, isNode } from '@vue-flow/core'


const initialElements = [
  {
    id: '1',
    type: 'input',
    label: 'Вход',
    position: { x: 0, y: 50 },
    sourcePosition: Position.Right,
  },
  {
    id: '2',
    type: 'output',
    label: 'Переработчик',
    position: { x: 250, y: 0 },
    targetPosition: Position.Left,
  },
  { id: '3', label: 'Выход', position: { x: 250, y: 100 }, sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: '4', label: 'Вход', position: { x: 500, y: 150 }, sourcePosition: Position.Right, targetPosition: Position.Left },
  {
    id: '5',
    type: 'output',
    label: 'Сборщик',
    position: { x: 750, y: 50 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', markerEnd: MarkerType.Arrow },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    style: { stroke: 'orange' },
    labelBgStyle: { fill: 'orange' },
  },
  { id: 'e3-4', source: '3', target: '4' },
]

const elements = ref(initialElements)

onConnect((params) => addEdges(params))
  

</script>
<template>
  <VueFlow
    v-model="elements"
    class="basicflow"
    :default-edge-options="{ type: 'smoothstep' }"
    :default-viewport="{ zoom: 1.5 }"
    :min-zoom="0.2"
    :max-zoom="4"
    fit-view-on-init
  >
    <Background pattern-color="#aaa" gap="8" />

    <MiniMap />

    <Controls />
  </VueFlow>
</template>

<style scoped>
/* @import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.23.0/dist/style.css'; */
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.23.0/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.basicflow.dark{background:#57534e;color:#fffffb}.basicflow.dark .vue-flow__node{background:#292524;color:#fffffb}.basicflow.dark .vue-flow__controls .vue-flow__controls-button{background:#292524;fill:#fffffb;border-color:#fffffb}.basicflow.dark .vue-flow__edge-textbg{fill:#292524}.basicflow.dark .vue-flow__edge-text{fill:#fffffb}.basicflow .controls{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}.basicflow .controls button{padding:4px;border-radius:5px;font-weight:600;-webkit-box-shadow:0px 5px 10px 0px rgba(0,0,0,.3);box-shadow:0 5px 10px #0000004d;cursor:pointer;display:flex;justify-content:center;align-items:center}.basicflow .controls button:hover{transform:scale(102%);transition:.25s all ease}
.selectable:hover {
  background-image: url('https://sun9-75.userapi.com/impg/EXM0-xLGE5C305crTesQN8U3z4KiYtXRYUIs1Q/zeUSegIWKEc.jpg?size=564x808&quality=95&sign=20e0cfa4ae0ff799b6417a036423e7e3&type=album'); /* Замените ссылку на фактическую ссылку на фотографию */
  background-size: cover; /* Масштабируйте фотографию для заполнения фона */
}
</style>
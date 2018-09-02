<template>
  <div class="scroll">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Scroll extends Vue {

}
</script>
<style lang="less" scoped>
  .scroll{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
    overflow-y: scroll;
  }
  .scroll::-webkit-scrollbar {
    display: none;
  }
</style>

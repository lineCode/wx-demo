<template>
  <div class="container">
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  public mounted() {
    console.log(1);
  }
}
</script>
<style lang="less" scoped>
  .main{

  }
</style>

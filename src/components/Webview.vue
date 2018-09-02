<template>
  <div class="container">
    <iframe src="http://www.baidu.com" width="100%" height="100%" frameBorder="0"></iframe>
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
  .container{
    width: 100%;
    height: 100%;
    position: absolute;
    iframe{
      margin: 0;
      padding: 0;
      border: 0;
      max-width: 100%;
    }
  }
</style>

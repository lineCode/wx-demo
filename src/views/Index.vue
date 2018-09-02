<template>
  <div class="container">
    <div class="info-list">
      <div>
        <img src="@/assets/1.jpg"/>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
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
  }
  .info-list{
    width: 100%;
  }
</style>

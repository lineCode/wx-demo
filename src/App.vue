<template>
  <div id="app">
    <div class="rows"><Header/></div>
    <div class="rows">
      <Scroll>
        <router-view/>
      </Scroll>
    </div>
    <div class="rows"><Tabbar/></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabbar from '@/components/Tabbar.vue'; // tabbar
import Header from '@/components/Header.vue'; // 头部组件
import Scroll from '@/components/Scroll.vue'; // 滚动组件

@Component({
  components: {
    Tabbar,
    Header,
    Scroll,
  },
})
export default class App extends Vue {

}
</script>
<style lang="less">
body,html{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: 8% 81% 11%;
  .rows{
    height: 100%;
    overflow: hidden;
  }
}
</style>

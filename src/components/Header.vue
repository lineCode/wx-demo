<template>
  <div class="header">
    <Icon class="trend" font="icon-zuo" :size="20" color="#fff"></Icon>
    <div class="title">微信</div>
    <div class="plug"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon.vue'; // @ is an alias to /src
@Component({
  components: {
    Icon,
  },
})
export default class Header extends Vue {

}
</script>
<style lang="less" scoped>
  .header{
    width: 100%;
    height: 100%;
    background: #2a2424;
    display: flex;
    flex-direction: row;
    align-items: center;
    .trend{
      padding-left: 10px;
    }
    .title{
      color: #fff;
      padding-left: 5px;
      font-size: 16px;
    }
  }
</style>

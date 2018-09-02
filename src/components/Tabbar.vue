<template>
  <div class="tabbar">
    <div @click="tabbarClick(v)" v-for="v in tabbar" :class="['nav', v.active]">
      <Icon :font="v.font" :size="28" :color="v.active" direction="column" :num="v.num" :spot="v.spot">
        <span :style="{color: v.active}">{{v.name}}</span>
      </Icon>
    </div>
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
export default class Tabbar extends Vue {

  public tabbar: any = {};
  public selected: any = {};

  public mounted(): void {
    this.tabbar = [
      {name: '微信', path: '/', font: 'icon-message', active: '#4bce2b', num: 20, spot: false},
      {name: '通讯录', path: '/mail', font: 'icon-team', active: '#878484', num: 0, spot: true},
      {name: '发现', path: '/find', font: 'icon-eye', active: '#878484', num: 0, spot: false},
      {name: '我', path: '/personal', font: 'icon-user', active: '#878484', num: 0, spot: false},
    ];
    this.selected = this.tabbar[0];
  }

  public tabbarClick(v: any): void {
    this.selected.active = '#878484';
    v.active = '#4bce2b';
    this.selected = v;
    this.$router.push(v.path);
  }
}
</script>
<style lang="less" scoped>
.tabbar{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  border-top:1px solid #d4d0d0;
  background-color: #fff;
  .nav{
    width: 100%;
    div {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      span{
        font-size: 12px;
      }
    }
  }

}
</style>

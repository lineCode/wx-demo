<template>
  <div class="container">
    <div class="mod hr">
      <Icon class="nav" font="icon-moneycollect-fill" color="#3a84f3" :size="25">
        <span class="text">朋友圈</span>
      </Icon>
    </div>
    <div class="mod hr">
      <Icon class="nav" font="icon-setting-fill" color="#3a84f3" :size="25">
        <span class="text">扫一扫</span>
      </Icon>
    </div>
    <div class="mod hr">
      <Icon class="nav click" font="icon-setting-fill" color="#3a84f3" :size="25">
        <span class="text">游戏</span>
      </Icon>
    </div>
    <div class="mod hr">
      <Icon class="nav" font="icon-setting-fill" color="#3a84f3" :size="25">
        <span class="text">小程序</span>
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
export default class Home extends Vue {
  public mounted() {
    console.log(1);
  }
}
</script>
<style lang="less" scoped>
  .container{
    background-color: #f5f5f5;
  }
  .personal{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 75px;
    .headimg{
      display: flex;
      justify-content: center;
      margin-left: 15px;
      img{
        width: 60px;
        height: 60px;
      }
    }
    .info{
      width: 58%;
      font-size: 14px;
      margin-left: 10px;
      .number{
        font-size: 12px;
        color: #817e7e;
      }
    }
    .qrcode{

    }
  }

  .mod{
    background-color: #fff;
    margin-top: 20px;
  }
  .nav{
    display: flex;
    align-items: center;
    padding: 7px;
    padding-left: 12px;
    .text{
      margin-left: 12px;
      font-size: 14px;
    }
  }
  .hr{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .nav{
      width: 90%;
      border-bottom: 1px solid #f0eaea;
    }
    .nav:last-child{
      border-bottom: 0;
    }
  }

</style>

<template>
  <div class="container">
    <div class="mod">
      <div class="personal">
        <div class="headimg">
          <img src="/headimg/1.jpg"/>
        </div>
        <div class="info">
          <div class="name">小时候</div>
          <div class="number">微信号：18320777006</div>
        </div>
        <div class="qrcode">error</div>
      </div>
    </div>
    <div class="mod hr">
      <Icon class="nav" font="icon-moneycollect-fill" color="#3a84f3" :size="25">
        <span class="text">钱包</span>
      </Icon>
    </div>
    <div class="mod hr">
      <Icon class="nav" font="icon-folder-open" color="#3a84f3" :size="25">
        <span class="text">收藏</span>
      </Icon>
      <Icon class="nav" font="icon-image" color="#3a84f3" :size="25">
        <span class="text">相册</span>
      </Icon>
      <Icon class="nav" font="icon-eye" color="#3a84f3" :size="25">
        <span class="text">卡包</span>
      </Icon>
      <Icon class="nav" font="icon-smile" color="rgb(245, 201, 12)" :size="25">
        <span class="text">表情</span>
      </Icon>
    </div>
    <div class="mod">
      <Icon class="nav" font="icon-setting-fill" color="#3a84f3" :size="25">
        <span class="text">设置</span>
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

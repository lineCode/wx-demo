<template>
  <div class="container">
    <div class="mod">
      <div class="click hr">
        <Icon class="nav" font="icon-folder-open" color="#3a84f3" :size="25">
          <span class="text">新朋友</span>
        </Icon>
      </div>
      <div class="click hr">
        <Icon class="nav" font="icon-image" color="#3a84f3" :size="25">
          <span class="text">群聊</span>
        </Icon>
      </div>
      <div class="click hr">
        <Icon class="nav" font="icon-eye" color="#3a84f3" :size="25">
          <span class="text">标签</span>
        </Icon>
      </div>
      <div class="click hr">
        <Icon class="nav" font="icon-smile" color="rgb(245, 201, 12)" :size="25">
          <span class="text">公众号</span>
        </Icon>
      </div>
    </div>
    <div class="mod hr">
      <Icon class="nav" font="icon-setting-fill" color="#3a84f3" :size="25">
        <span class="text">我的企业</span>
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
  .mod:first-child{
    margin-top: 0;
  }
  .mod{
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
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
  }
  .hr:last-child{
    .nav{
      border-bottom: 0;
    }
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

</style>

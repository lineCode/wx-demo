<template>
  <div class="container">
    <div class="list click" v-for="v in datalist" @click="dialog(v)">
      <div class="headimg">
        <img :src="v.img"/>
      </div>
      <div class="info">
        <div class="content">
          <div class="f-size16">{{v.name}}</div>
          <div class="f-size14 c-10001">{{v.details}}</div>
        </div>
        <div class="remark">
          <div class="f-size14 c-10001">{{v.date}}</div>
          <div class="f-size14 c-10001">{{v.tip}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Webview from '@/components/Webview.vue'; // web组件
import Http from '@/lib/http'; // 滚动组件

interface ListInfo {
  img: string;
  name: string;
  details: string;
  date: string;
  tip: string;
}

@Component({
  components: {
    Webview,
  },
})
export default class Home extends Vue {
  public datalist: ListInfo[] = [];
  public async mounted() {
    const res = await Http.Get('list.json');
    this.datalist.push(...res);
    this.datalist.push(...res);
    this.datalist.push(...res);
  }

  public dialog(v: any): void{
    this.$router.push('/dialog');
  }
}
</script>
<style lang="less" scoped>
  .container{
    width: 100%;
    background-color: #fff;
  }
  .list{
    height: 60px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f5f0f0;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 13px;
    padding-right: 13px;
    .headimg{
      height: 100%;
      img {
        height: 100%;
      }
    }
    .info{
      width: 100%;
      height: 100%;
      .content,.remark{
        padding-left: 10px;
        padding-right: 10px;
        height: 100%;
        display: grid;
        grid-template-rows:50% 50%;
        align-items: center;
      }
      .content{
        float: left;
      }
      .remark{
        float: right;
      }
    }
  }
  .list:last-child{
    border-bottom: 0px !important;
  }

</style>

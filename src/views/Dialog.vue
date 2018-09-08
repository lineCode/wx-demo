<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
  public render(h: any) {
    return (
      <div class='container'>
        <div class='dialog'>
          <div class='headimg'>
            <img src='/headimg/4.jpg'/>
          </div>
          <div class='text'>
            <div class='bot'><div class='top'></div></div>
            <div class='content'>
              到哪里了
            </div>
          </div>
        </div>

        <div class='dialog right'>
          <div class='content'>
            我到笋岗了。
          </div>
          <div class='bot'><div class='top'></div></div>
          <div class='headimg'>
            <img src='/headimg/2.jpg'/>
          </div>
        </div>

      </div>
    );
  }
}
</script>
<style lang="less" scoped>
.container{
  margin-top: 10px;
}
.dialog{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  .bot{
    position: relative;
    .top{
      position: absolute;
      left: -6px;
      top:13px;
      border-right:8px solid #fff;
      border-left:8px solid transparent;
      border-top:8px solid transparent;
      border-bottom:8px solid transparent;
    }
  }
  .headimg{
    img{
      width: 40px;
    }
  }
}

.content{
  position: relative;
  padding: 7px;
  margin-left: 10px;
  min-width: 70px;
  border-radius: 5px;
  background-color: #fff;
  font-size: 14px;
  max-width: 65%;
}
.right{
  justify-content: flex-end;
  .content{
    margin-right: 10px;
    background-color: #0af605;
    max-width: 65%;
  }
  .bot{
    position: relative;
    .top{
      position: absolute;
      left: -10px;
      top:13px;
      border-left:8px solid #0af605;
      border-right:8px solid transparent;
      border-top:8px solid transparent;
      border-bottom:8px solid transparent;
    }
  }
}
</style>

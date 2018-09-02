<template>
  <div :class="['layout-icon', 'direction-'+direction]">
    <div :class="['icon','iconfont', font]" :style="{'font-size': size + 'px', 'color': color}">
      <span class="topic" v-if="num > 0">{{num}}</span>
      <span class="spot" v-if="spot"></span>
    </div>
    <div><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import '@/css/iconfont.css';
@Component({
  props: {
    direction: { // 颜色
      type: String,
      default: () => 'row',
    },
    font: String, // 图标名称
    size: { // 大小
      type: Number,
      default: () => 20,
    },
    color: { // 颜色
      type: String,
      default: () => 'red',
    },
    num: { // 颜色
      type: Number,
      default: () => 0,
    },
    spot: {
      type: Boolean,
      default: () => false,
    },
  },
})
export default class Icon extends Vue {

}
</script>
<style lang="less" scoped>
.layout-icon{
  display: flex;
  flex-direction: column;
  position: relative;
  div {
    display: flex;
    align-items: center;
  }
}

.direction-row{
  flex-direction: row;
}
.direction-column{
  flex-direction: column;
}

.topic{
  padding: 0;
  margin: 0;
  width: 18px;
  height: 18px;
  color: #fff;
  text-align: center;
  line-height: 18px;
  border-radius: 48%;
  background-color: #fc1212;
  position: absolute;
  font-weight: bold;
  font-size: 12px !important;
  top: 0;
  right: 20%;
}
.spot{
  padding: 5px;
  background-color: #fc1212;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 0;
}
</style>

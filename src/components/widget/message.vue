<template>
  <div class="message-wrapper" v-popover:messageDetail>
    <div class="iconfont icon-lingdang my-lingdang" :class="{move: hasMessage}"></div>
    <div class="text-wrapper" v-if="hasMessage">
      <span class="text" v-text = "showMessageCount"></span>
    </div>
    <el-popover
  ref="messageDetail"
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="日期"></el-table-column>
    <el-table-column width="100" property="name" label="姓名"></el-table-column>
    <el-table-column width="300" property="address" label="地址"></el-table-column>
  </el-table>
</el-popover>
  </div>
</template>

<script>
export default {

  name: 'message',

  data () {
    return {
      messageCount: 100
    };
  },
  computed: {
    showMessageCount: function () {
      if (this.messageCount > 99) {
        return '99+';
      } else {
        return this.messageCount;
      }
    },
    hasMessage: function () {
      if (this.messageCount > 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    showDetail () {
      console.log(111);
    }
  }
};
</script>

<style lang="scss" scoped>
.message-wrapper {
  position: relative;
  width: 30px;
  height: 26px;
  margin:0 auto;
  cursor: pointer;
  .my-lingdang {
    font-size: 30px;
  }
  .text-wrapper {
    position: absolute;
    top: -10px;
    left:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: red;
    .text {
      color: #fff;
      font-size: 14px;
    }
  }
  .move {
    animation:message-move 2s ease-in-out alternate infinite;
  }
  @keyframes message-move {
    0% {
      transform: rotate(-30deg);
    }
    10% {
      transform: rotate(30deg);
    }
    20% {
      transform: rotate(-10deg);
    }
    30% {
      transform: rotate(10deg);
    }
    40% {
      transform: rotate(-15deg);
    }
    55% {
      transform: rotate(15deg);
    }
    70% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>
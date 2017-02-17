<template>
  <div id="app">
    <v-header></v-header>
    <el-row class="content-wrapper">
      <el-col class="content-left" :span="4">
        <v-menu></v-menu>
      </el-col>
      <el-col class="content-right" :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import menu from './components/common/menu'
import header from './components/common/header'

export default {
  name: 'app',
  components: {
    'v-menu': menu,
    'v-header': header
  }
}
</script>

<style lang="scss" scoped>
#app {
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .content-wrapper {
    padding-top: 80px;
  }
}
</style>

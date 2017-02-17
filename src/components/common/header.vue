<template>
	<div class="header-wrapper">
		<div class="header-left">
      <div class="left-wrapper">
        <img class="img" src="http://121.40.102.80:6080/web/dist/images/logo.png" alt="智慧园区">
        <span v-text="version" class="version"></span>
      </div>
    </div>
		<div class="header-right">
      <el-row>
        <el-col :span="6" class="alarm">
          <v-message></v-message>
        </el-col>
        <el-col :span="6" class="userinfo">part2</el-col>
        <el-col :span="6" class="help">part3</el-col>
        <el-col :span="6" class="code">part4</el-col>
      </el-row>
    </div>
	</div>
</template>

<script>
import message from 'components/widget/message';
export default {

  name: 'header',

  data () {
    return {
      version: 'v3.3.1'
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.userinfo;
    }
  },
  components: {
    'v-message': message
  }
}
</script>

<style lang="scss" scoped>
	.header-wrapper {
    z-index: 1000;
		position: fixed;
		height: 80px;
		width: 100%;
		display: flex;
		background-color: #fff;
		.header-left {
			flex: 0 0 400px;
      height: 100%;
      .left-wrapper {
        height: 34px;
        margin-top: 23px;
        .img{
          vertical-align: bottom;
        }
        .version {
          vertical-align: bottom;
        }
      }

		}
		.header-right {
			flex: 1;
      .alarm,.userinfo,.help,.code {
        height: 34px;
        margin-top: 23px;
        border-left: 1px solid #ddd;
        vertical-align: bottom;
      }
		}
	}
</style>
<template>
	<el-menu default-active="0-0"  class="el-menu-vertical-demo" :unique-opened = 'true' @open="handleOpen" @close="handleClose">
		<el-submenu :index="parentIndex + ''" v-for="(parentMenu, parentIndex) in menus">
			<template slot="title"><i class="el-icon-message"></i>{{parentMenu.name}}</template>
			<el-menu-item :index="parentIndex + '-' + subIndex" v-for="(subMenu, subIndex) in parentMenu.menus">
        <router-link :to="subMenu.url">{{subMenu.name}}</router-link>
      </el-menu-item>
		</el-submenu>
	</el-menu>
</template>
<script>
  import Axios from 'axios';
  import config from 'src/config';
  export default {
    data () {
      return {
        menus: []
      }
    },
    created: function () {
      var _this = this;
      let _home = config.ajaxOpt.protocol + '://' + config.ajaxOpt.domain + ':' + config.ajaxOpt.port;
      Axios.get(_home + '/serverRoleAction!resource.action', {
        params: {
          _: (new Date()).getTime()
        }
      })
      .then(function (response) {
        if (response.data.status === '100') {
          _this.menus = response.data.data;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
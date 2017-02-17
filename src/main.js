// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'src/css/iconfont.css';
import Axios from 'axios';
import Router from 'router';
import Vuex from 'vuex';
import App from './App';
import routerCfg from './router-config';
import 'normalize.css';
import config from 'src/config';
/* eslint-disable spaced-comment */
//引入element-ui;
Vue.use(ElementUI);
Vue.use(Axios);
Vue.use(Router);
Vue.use(Vuex);
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    userinfo: {}
  },
  mutations: {
    getUserinfo: function (state) {
      let _home = config.ajaxOpt.protocol + '://' + config.ajaxOpt.domain + ':' + config.ajaxOpt.port;
      Axios.get(_home + '/serverUserAction!getUser_.action', {
        params: {
          _: (new Date()).getTime()
        }
      })
      .then(function (response) {
        if (response.data.status === '100') {
          state.userinfo = response.data.data;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  'router': routerCfg.router,
  components: { App },
  created: function () {
    return store.commit('getUserinfo');
  }
})

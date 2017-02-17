import Router from 'router';
import operate from 'components/statistics/operate';
import AppSign from 'components/statistics/sign/AppSign';
import PCSign from 'components/statistics/sign/PCSign';
const routes = [{
  path: '/guideAction!toAdminIndex.action',
  component: operate
}, {
  path: '/activitySignInAction!list.action',
  component: AppSign
}, {
  path: '/salesStatementAction!queryShopList.action',
  component: PCSign
}];
module.exports = {
  router: new Router({
    routes // short for routes: routes
  })
}

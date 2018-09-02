import TRouter from './lib/router/index';
import Home from './views/Home.vue';
import Auth from './middleware/auth';
/*
聊天列表 list
聊天详情 info（
  聊天 chat
  支付 pay
  公众号 app
）
通讯录 mail
发现 find（
  朋友圈 friend
）
搜索 search
个人中心 personal
webview
*/

TRouter.AddRouter('index', '/', Home).Middleware(Auth.info);
TRouter.AddRouter('index', '/dialog', () => import('./views/Dialog.vue'));
TRouter.AddRouter('mail', '/mail', () => import('./views/Mail.vue'));
TRouter.AddRouter('find', '/find', () => import('./views/Find.vue'));
TRouter.AddRouter('search', '/search', () => import('./views/Search.vue'));
TRouter.AddRouter('personal', '/personal', () => import('./views/Personal.vue'));

export default TRouter.NewRouter('history', process.env.BASE_URL);

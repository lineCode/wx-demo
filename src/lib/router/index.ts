import Vue from 'vue';
import VueRouter from 'vue-router';
import Middleware from './middleware';

Vue.use(VueRouter);

class TRouter extends Middleware {
  public router: any = {};
  public group: any = [];
  public ismiddleware: boolean = false;

  /**
   * 添加路由
   * @param name 路由名称
   * @param path 路由地址
   * @param component 路由使用的组件
   * @param children 子路由
   * @return {}
   */
  public AddRouter(name: any, path: any, component: any, children?: any) {
    this.router = {
      path,
      name,
      meta: {},
    };
    if (component !== '') {
      this.router.component = component;
    }
    if (typeof(children) === 'function') {
      const newrouter = new TRouter();
      children(newrouter);
      this.router.children = newrouter.group;
    }
    this.group.push(this.router);
    return this;
  }

  /**
   *
   * meta 信息
   * @param m {} meta 参数
   *
   */
  public Meta(m: any): any {
    let middleware = [];
    if (this.router.meta.middleware !== undefined) {
      middleware = [this.router.meta.middleware];
    }
    this.router.meta = {
      ...m,
      ...middleware,
    };
    return this;
  }

  /**
   *
   * 中间件
   * @param m 需要执行的中间件
   * Middleware(test, test01, test03, test04)
   *
   */
  public Middleware(...m: any[]): any {
    this.ismiddleware = true;
    if (m.length === 1) { // 只有一个值
      this.router.meta.middleware = m[0];
    } else {
      this.router.meta.middleware = m;
    }
    return this;
  }

  public Debug(): any {
    return this.group;
  }

  /**
   *
   * 运行路由
   *
   */
  public NewRouter(mode: any, base: any): any {
    let router = new VueRouter({
      mode,
      base,
      routes: this.group,
    });
    // 如果有使用中间件
    if (this.ismiddleware === true) {
      router = this.RouterBefore(router);
    }
    return router;
  }
}

export default new TRouter();

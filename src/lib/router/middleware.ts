

class Middleware {

  /**
   *
   * 初始化中间件
   * 中间件返回retun true | false
   *          true 进入to路由 false 不做任何操作，可自行在中间件操作
   *
   */
  protected Single(func: any, to: any, from: any, next: any): void {
    const res = func(to, from, next);
    if (res === true) {
      next();
    }
  }

  protected Multiple(func: any, to: any, from: any, next: any): void {
    let res = false;
    for (const f of func) {
      res = f(to, from, next);
      if (res === false) {
        break;
      }
    }
    if (res === true) {
      next();
    }
  }

  /**
   *
   * 执行中间件
   *
   */
  protected Run(middleware: any, to: any, from: any, next: any): void {
    const type = typeof (middleware);

    switch (type) {
      case 'function':
        this.Single(middleware, to, from, next);
        break;
      case 'object':
        this.Multiple(middleware, to, from, next);
        break;
      default:
        alert(`路由（${to.fullPath}）middleware 不支持<${type}>类型中间件，支持<function><object>类型`);
        break;
    }
  }

  /**
   *
   * 路由监听
   *
   */
  protected RouterBefore(router: any): any {
    router.beforeEach((to: any, from: any, next: any) => {
      if (to.meta.middleware !== undefined) {
        this.Run(to.meta.middleware, to, from, next);
      } else {
        next();
      }
    });
    return router;
  }
}

export default Middleware;

class Auth {

  public info(to: any, from: any, next: any): boolean {
    // alert('中间件获取用户信息,成功');
    // true 默认进入to路由
    // false 不进入路由
    return true;
  }

  public login(to: any, from: any, next: any): boolean {
    alert('登录授权失败');
    return false;
  }

  public quit(to: any, from: any, next: any): boolean {
    alert('账号已经在别地方登录。。。退出登录。');
    return false;
  }

}

export default new Auth();

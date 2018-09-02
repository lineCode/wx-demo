import Axios from 'axios';

interface AxiosConfig {
  baseURL?: string;
  timeout?: number;
  headers?: any;
}

interface Data {
  status?: number;
  data?: any;
}

class Http {

  protected request: any;

  /**
   * 初始化 axios
   * @param baseURL
   */
  public constructor() {
    this.request = Axios;
  }

  /**
   * 配置axios
   *
   */
  public SetConfig(config?: AxiosConfig): void {
    const $axios = Axios.create(config);
    this.request = $axios;
  }

  /**
   *
   * 请求拦截器
   *
   */
  public SetRequestInterceptors(request: any): void {
    // http request 拦截器
    this.request.interceptors.request.use((config: any) => {
      /*if (config.method === 'post') {
        config.data = qs.stringify(config.data, {arrayFormat: 'brackets'})
      }*/
      config = request(config);
      return config;
    });
  }

  /**
   *
   * 请求响应拦截器
   *
   */
  public SetResponseInterceptors(response: any, error: any): void {
    // http response 拦截器
    this.request.interceptors.response.use((res: any) => {
      response(res);
    }, (err: any) => {
      error(err);
    });
  }

  /**
   *
   * post 请求
   * @param url 请求url
   * @param params 请求参数 {}
   */
  public async Post(url: string, params?: any) {
    let response: any = {};
    await this.request.post(url, params).then((res: any) => {
      response = res;
    }).catch((error: any) => {
      console.log(error);
    });
    return response;
  }

  /**
   *
   * post 请求
   * @param url 请求url
   * @param params 请求参数 {}
   */
  public async Get(url: string, param?: any) {
    let response: any = {};
    await this.request.get(url).then((res: any) => {
      response = res.data;
    }).catch((error: any) => {
      console.log(error);
    });
    return response;
  }

}

export default new Http();

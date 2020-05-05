/* 此文件是对axios的二次封装
1.配置请求路径
2.配置超时时间
 1，统一处理post请求json编码问题（转为urlencoded）
  2.统一返回真正的数据，而不是axios包装的那个response对象
*/
//引入axios
import axios from 'axios'
//引入querystring 将对象转为urlencoded字符串
import qs from 'querystring'
//引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//引入antd里面的message
import {message as msg} from 'antd'

//配置请求的基础路径
axios.defaults.baseURL = '/api'
//配置超时时间
axios.defaults.timeout = 2000

//请求拦截器
axios.interceptors.request.use((config) =>{
  nprogress.start()
  const {method,data} = config
  //统一处理post请求json编码问题
  if(method.toLowerCase() === 'post' && data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})



//响应拦截器
axios.interceptors.response.use(
  //成功的回调，返回的是2开头的状态码
  response =>{
    nprogress.done()
    return response.data
  },
  //失败的回调，1.返回的状态码不是2开头的，2.达到了超时时间。3.网路不通
  err =>{
    nprogress.done()
    let errmsg = '真难'
    const {message} = err
    if(message.indexOf('401') !== -1) errmsg = '未登录或身份过期，请重新登录'
    else if(message.indexOf('Network Error') !== -1) errmsg = '网络不通'
    else if(message.indexOf('timeout') !== -1) errmsg = '网络不稳定，连接超时'
    msg.error(errmsg,1)
    return new Promise(() =>{})
  }
)
export default axios

//建立一个单独的fetch.js封装axios请求并作为方法暴露出来

/*

如下所示，如果需要调用ajax请求

import fetch from 'utils/request_axios'
fetch({
  method: 'get',
  url: '/users/list'
})
  .then(res => {
  cosole.log(res)
})
*/

import axios from 'axios';
import {Notification} from 'antd';


// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // node环境的不同，对应不同的baseURL
  timeout: 5000, // 请求的超时时间
  //设置默认请求头，使post请求发送的是formdata格式数据// axios的header默认的Content-Type好像是'application/json;charset=UTF-8',我的项目都是用json格式传输，如果需要更改的话，可以用这种方式修改
  // headers: {  
    // "Content-Type": "application/x-www-form-urlencoded"
  // },
  withCredentials: true // 允许携带cookie
})

// 发送请求前处理request的数据
axios.defaults.transformRequest = [function (data) {
  let newData = ''
  for (let k in data) {
    newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
  }
  return newData
}]

// request拦截器
service.interceptors.request.use(
  config => {
    // 发送请求之前，要做的业务
    return config
  },
  error => {
    // 错误处理代码
    Notification.error(error,1.5);
    return Promise.reject(error);
  }
)

// response拦截器
service.interceptors.response.use(
  response => {

    const res = response.data;
    if (res.status !== 0) { Notification.error(res.message,1.5)}
    // 数据响应之后，要做的业务
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

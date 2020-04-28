//该文件用于管理仙姑的ajax请求，每一个请求对应一个请求函数
import ajax from './ajax'

// async function requestLogin() {
//   let result =await ajax.post('./login',values)
//   return result
// }

//请求登录的函数 简写 用分别暴露export 因为后期会有很多请求不能用默认
// export const reqLogin = async(username,password) => ajax.post('/login',{username,password})

//请求登录的函数,loginObj形如：{username:'xx',password:'xx'}
export const reqLogin = async(loginObj) => ajax.post('/login',loginObj)

import React, { Component } from 'react'
//引入antd组件
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//
import {reqLogin} from '../../api/index'

//引入logo
import logo from './images/logo.png'
//引入样式
import './css/login.less'
// import { configConsumerProps } from 'antd/lib/config-provider';
// import { METHODS } from 'http';

//解构赋值获取Item
const {Item} = Form

export default class Login extends Component {

  //表单提交且验证通过的回调
  onFinish = async values => {
    let result = await reqLogin(values)
    console.log(result)
  }
  //判断条件 密码验证器
  pwdValidator = (_,value="") =>{
    let errMsgArr = []
    if(!value.trim())return Promise.reject('密码必须输入')   
    if(value.length <4 ) errMsgArr.push('密码必须大于等于4位')
    if(value.length >12 ) errMsgArr.push('密码必须小于等于12位')
    if(!(/^\w+$/).test(value)) errMsgArr.push('密码必须是数字，字母，下划线')
    if(errMsgArr.length !== 0) return Promise.reject(errMsgArr)
    else return Promise.resolve()
  }
  render() {
    return (
      <div className = "login">
        <header>          
          <img src={logo} alt="logo"/>
          <h1>幂幂不是妖</h1>
        </header>
        <section>
          <span className ="title ">用户登录</span>
          <Form
            // name="normal_login"
            // className="login-form"
            // initialValues={{
            //   remember: true,
            // }}
            onFinish={this.onFinish}
          >
            <Item
              name="username"
              rules={[
                {required: true, message: '请输入用户名'},
                {min: 4, message: '最小四位'},
                {max: 12, message: '最大12位'},
                {pattern: /^\w+$/, message: '用户名必须是数字，字母，下划线组成'},

              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Item>
            <Item
              name="password"
              rules={[
               {validator:this.pwdValidator}
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Item>          
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}

//引入react核心库
import React, { Component } from 'react'
//引入一级路由Admin,Login
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'
//注册路由，且有两个以上的路由引入react-router -dom,谁都不匹配默认redirect
import {Switch,Route,Redirect} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path = "/login" component = {Login}/>
        <Route path = "/admin" component = {Admin}/>
        <Redirect to = "login"/>
      </Switch>       
    )
  }
}  
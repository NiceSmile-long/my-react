import React, { Component } from 'react'
import MyButton from './components/Button/Button'
import {Button,DatePicker} from 'antd'


const { RangePicker } = DatePicker;


export default class App extends Component {
  render() {
    return (
      <div>
        <MyButton>杨幂</MyButton>
        <Button type="primary">杨幂</Button>
        <RangePicker />
      </div>
    )
  }
}  
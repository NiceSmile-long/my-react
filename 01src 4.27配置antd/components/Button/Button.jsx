import React, { Component } from 'react'

export default class MyButton extends Component {
  render() {
    return (
      <button className="active" {...this.props}/>
    )
  }
}

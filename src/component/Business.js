import React, { Component } from 'react'
import News from './News'

export class Business extends Component {
  render() {
    return (
      <div>
       <News pageSize={5} country="in" category="business"/>
      </div>
    )
  }
}

export default Business
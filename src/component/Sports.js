import React, { Component } from 'react'
import News from './News'

export class Sports extends Component {
  render() {
    return (
      <div><News pageSize={5} country="in" category="sports"/></div>
    )
  }
}

export default Sports
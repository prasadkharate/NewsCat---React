import React, { Component } from 'react'
import News from './News';
export class Technology extends Component {
  render() {
    return (
      <div><News pageSize={5} country="in" category="technology"/></div>
    )
  }
}

export default Technology
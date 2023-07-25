import React, { Component } from 'react'
import News from './News'

export class Entertainment extends Component {
  render() {
    return (
      <div><News pageSize={5} country="in" category="entertainment"/></div>
    )
  }
}

export default Entertainment
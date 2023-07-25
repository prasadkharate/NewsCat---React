import React, { Component } from 'react'
import News from './News'
export class General extends Component {
  render() {
    return (
      <div>
        <News pageSize={5} country="in" category="general"/>
      </div>
    )
  }
}

export default General
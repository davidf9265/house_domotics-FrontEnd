import React, { Component } from 'react'

export default class Zone extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            label: null,
            className: null
        };
    }
  
    render() {
        return (
          <div className={this.props.className}>{this.props.label}</div>
        )
    }
}

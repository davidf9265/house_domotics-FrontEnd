import React, { Component } from 'react';

class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            label: null,
        };
    }

    render() {
        return (
            <button className="custom-button">
                {this.props.label}
            </button>
        );
    }
}

export default Button;
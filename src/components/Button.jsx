import React, { Component } from 'react';

class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: false,
            label: null
        };
    }
    handleClick = () => {
        if(this.state.value != null){
            this.setState({value: !this.state.value}) 
        }else{
            this.setState({value: true})
        }
    }
    render() {
        return (
            <button
                className={this.state.value ? "custom-button-pressed elevation-5": 'custom-button elevation-5'}
                onClick={this.handleClick}>
                {this.props.label}
            </button>
        );
    }
}

export default Button;
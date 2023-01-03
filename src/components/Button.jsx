import React, { Component } from 'react';

class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: false,
            label: null
        };
    }
    handleClick = event => {
        console.log(this.state.value)
        if(this.state.value != null){
            console.log("not null")
            console.log(this.state.value)
            this.setState({value: !this.state.value}) 
            console.log(this.state.value)
        }else{
            console.log("null")
            this.setState({value: true})
        }
        console.log(this.state.value)
        if(this.state.value){
            event.currentTarget.classList.add('custom-button-pressed')
            event.currentTarget.classList.remove('custom-button')
        }else{
            event.currentTarget.classList.add('custom-button')
            event.currentTarget.classList.remove('custom-button-pressed')
        }
        // event.currentTarget.classList.remove('custom-button')
    }

    render() {
        return (
            <button
                className="custom-button elevation-5"
                onClick={this.handleClick}>
                {this.props.label}
            </button>
        );
    }
}

export default Button;
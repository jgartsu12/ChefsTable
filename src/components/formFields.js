import React, { Component } from 'react';

export class Input extends Component {
    render() {
        const { type, placeholder, input } = this.props;
        return (
            <div className='form-input__wrapper'>
                <input 
                    className='form-input__input' 
                    type={type}
                    placeholder={placeholder}
                    {...input}
                />
            </div>
        );
    }
}

export class Button extends Component {
    render() {
        const { type, onClick, input, title } = this.props;
        return (
            <div className='form-button__wrapper'>
                <button 
                    className='form-button__btn'
                    type={type}
                    {...input}
                    onClick={onClick}
                >
                    {title}
                </button>
            </div>
        );
    }
}
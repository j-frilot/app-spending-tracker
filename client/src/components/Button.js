import React from 'react';
import '../style.css';

const Button = (props) => {
    return (
        <button type={props.type} className="btn">
            {props.text}
        </button>
    );
};

export default Button;

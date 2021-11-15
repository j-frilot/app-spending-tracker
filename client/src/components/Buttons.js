import React from 'react';
import Button from 'react-bootstrap/Button';
import '../style.css';

const Buttons = (props) => {
    return (
        <Button variant="primary" type={props.type}>
            {props.text}
        </Button>
    );
};

export default Buttons;

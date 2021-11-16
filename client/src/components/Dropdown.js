import React, { useState } from 'react';
// import Buttons from './Buttons';
// import Accordion from 'react-bootstrap/Accordion';
import ItemForm from './ItemForm';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="mx-auto">
            <Button
                onClick={() => setDropdown(!dropdown)}
                aria-controls="example-collapse-text"
            >
                Add An Item
            </Button>

            <Collapse in={dropdown}>
                <div id="example-collapse-text">
                    <ItemForm />
                </div>
            </Collapse>
        </div>
    );
};

export default Dropdown;

import React from 'react';
import Buttons from './Buttons';
import Accordion from 'react-bootstrap/Accordion';
import ItemForm from './ItemForm';

const Dropdown = () => {
    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h3>
                        <Buttons type="link" text="Add An Item" />
                    </h3>
                </Accordion.Header>

                <Accordion.Body>
                    <ItemForm />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Dropdown;

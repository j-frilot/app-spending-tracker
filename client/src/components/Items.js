import React from 'react';
// import ItemForm from './ItemForm';
import Buttons from './Buttons';
import Table from 'react-bootstrap/Table';

const Items = ({ getInputs }) => {
    // const thisArray = [1, 2, 3, 4, 5];

    console.log({ getInputs });
    return (
        <Table striped borded hover responsive>
            <thead>
                <tr>
                    <th>
                        <Buttons type="button" text="Date" />
                    </th>
                    <th>
                        <Buttons type="button" text="Price" />
                    </th>
                    <th>
                        <Buttons type="button" text="Category" />
                    </th>
                    <th>
                        <Buttons type="button" text="Item" />
                    </th>
                    <th>
                        <Buttons type="button" text="Store" />
                    </th>
                </tr>
            </thead>

            <tbody></tbody>
        </Table>
    );
};

export default Items;

import React from 'react';
import Buttons from './Buttons';
import Table from 'react-bootstrap/Table';

const Items = () => {
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
                        <Buttons type="button" text="Item" />
                    </th>
                    <th>
                        <Buttons type="button" text="Store" />
                    </th>
                    <th>
                        <Buttons type="button" text="Category" />
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>the date</td>
                    <td>the price</td>
                    <td>the item</td>
                    <td>the store</td>
                    <td>the category</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default Items;

import React, { useState } from 'react';
import Items from './Items';
import Buttons from './Buttons';
import Form from 'react-bootstrap/Form';

const ItemForm = () => {
    const [inputs, setInputs] = useState({
        date: '',
        price: '',
        category: '',
        item: '',
        store: ''
    });

    const getInputs = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    // const [date, setDate] = useState('');
    // const [price, setPrice] = useState('');
    // const [category, setCategory] = useState('');
    // const [item, setItem] = useState('');
    // const [store, setStore] = useState('');

    // let submittedData;

    // const submitForm = (e) => {
    //     e.preventDefault();

    //     setDate('');
    //     setPrice('');
    //     setCategory('');
    //     setItem('');
    //     setStore('');

    //     // submittedData.push(date, price, category, item, store);
    // };

    return (
        <>
            <Form action="" onSubmit={getInputs}>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={inputs.date}
                        onChange={getInputs}
                        name="date"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        min="0.00"
                        max="10000.00"
                        step="0.01"
                        value={inputs.price}
                        onChange={getInputs}
                        name="price"
                        placeholder="$19.99"
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        name="category"
                        value={inputs.category}
                        onChange={getInputs}
                    >
                        <option value>Selected Category</option>
                        <option value="groceries">Groceries</option>
                        <option value="bills">Bills</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Item</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputs.item}
                        onChange={getInputs}
                        name="item"
                        placeholder="Groceries"
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Store</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputs.store}
                        onChange={getInputs}
                        name="store"
                        placeholder="Food Mart"
                        required
                    />
                </Form.Group>
                <Buttons type="submit" value="submit" text="Add" />
            </Form>
            <Items getInputs={inputs} />
        </>
    );
};

export default ItemForm;

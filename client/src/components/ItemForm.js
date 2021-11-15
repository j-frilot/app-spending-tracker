import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Buttons from './Buttons';

const ItemForm = () => {
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [item, setItem] = useState('');
    const [store, setStore] = useState('');

    const submitForm = (e) => {
        e.preventDefault();

        console.log(date, price, category, item, store);
        setDate('');
        setPrice('');
        setCategory('');
        setItem('');
        setStore('');
    };

    return (
        <Form action="" onSubmit={submitForm}>
            <div>
                <Form.Label htmlFor="date">Date</Form.Label>
                <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    name="date"
                />
            </div>

            <div>
                <Form.Label htmlFor="price">Price</Form.Label>
                <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    placeholder="$19.99"
                    required
                />
            </div>

            <div>
                <Form.Label htmlFor="category">Category</Form.Label>
                <Form.Select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value>Selected Category</option>
                    <option value="groceries">Groceries</option>
                    <option value="bills">Bills</option>
                </Form.Select>
            </div>

            <div>
                <Form.Label htmlFor="item">Item</Form.Label>
                <Form.Control
                    type="text"
                    value={item}
                    onChange={(e) => setDate(e.target.value)}
                    name="item"
                    placeholder="Groceries"
                    required
                />
            </div>

            <div>
                <Form.Label htmlFor="store">Store</Form.Label>
                <Form.Control
                    type="text"
                    value={store}
                    onChange={(e) => setStore(e.target.value)}
                    name="store"
                    placeholder="Food Mart"
                    required
                />
            </div>
            <Buttons type="submit" value="submit" text="Add" />
        </Form>
    );
};

export default ItemForm;

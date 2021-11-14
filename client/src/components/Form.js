import React, { useState } from 'react';

import Button from './Button';

const Form = () => {
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
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    name="date"
                />
            </div>

            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    placeholder="$19.99"
                    required
                />
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value>Selected Category</option>
                    <option value="groceries">Groceries</option>
                    <option value="bills">Bills</option>
                </select>
            </div>

            <div>
                <label htmlFor="item">Item</label>
                <input
                    type="text"
                    value={item}
                    onChange={(e) => setDate(e.target.value)}
                    name="item"
                    placeholder="Groceries"
                    required
                />
            </div>

            <div>
                <label htmlFor="store">Store</label>
                <input
                    type="text"
                    value={store}
                    onChange={(e) => setStore(e.target.value)}
                    name="store"
                    placeholder="Food Mart"
                    required
                />
            </div>
            <Button type="submit" value="submit" text="Add" />
        </form>
    );
};

export default Form;

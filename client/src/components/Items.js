import React from 'react';
import Button from './Button';

const Items = () => {
    return (
        <section>
            <ul className="grid-five">
                <li>
                    <Button type="button" text="Date" />
                </li>
                <li>
                    <Button type="button" text="Price" />
                </li>
                <li>
                    <Button type="button" text="Item" />
                </li>
                <li>
                    <Button type="button" text="Store" />
                </li>
                <li>
                    <Button type="button" text="Category" />
                </li>
            </ul>

            <ul className="grid-five">
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
            </ul>
        </section>
    );
};

export default Items;

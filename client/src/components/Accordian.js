import React from 'react';
import Button from './Button';
import Form from './Form';

const Accordian = () => {
    return (
        <section>
            <div>
                <div>
                    <h2>
                        <Button type="button" text="Add An Item" />
                        <Form />
                    </h2>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordian;

import React from 'react';
import '../styles/Form.css'

export default function Form(props) {

    const { values, change, disabled, submit, errors } = props;

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <div id="form-container" onSubmit={onSubmit}>

            <form id='pizza-form'>

            {/* Name input */}
            <label>
                <h4>{`Name `}</h4>
                <input
                    type='text'
                    name='name'
                    id='name-input'
                    value={values.name}
                    onChange={onChange}
                />
            </label>

            {/* Pizza size dropdown */}
            <label>
                <h4>{`Pizza Size `}</h4>
                <select id='size-dropdown' name='size' value={values.size} onChange={onChange}>
                    <option value=''>-- Select Size -- </option>
                    <option value='12'>12"</option>
                    <option value='16'>16"</option>
                    <option value='20'>20"</option>
                </select>
            </label>

            {/* Toppings checklist */}
            <h4>Choose toppings</h4>
            <div id="checklist-container">
                <label>
                    <p>Pepperoni</p>
                    <input 
                        name='pepperoni'
                        type='checkbox'
                        value={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Mushrooms</p>
                    <input 
                        name='mushrooms'
                        type='checkbox'
                        value={values.mushrooms}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Olives</p>
                    <input 
                        name='olives'
                        type='checkbox'
                        value={values.olives}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Sausage</p>
                    <input 
                        name='sausage'
                        type='checkbox'
                        value={values.sausage}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Peppers</p>
                    <input 
                        name='peppers'
                        type='checkbox'
                        value={values.peppers}
                        onChange={onChange}
                    />
                </label>
            </div>

            {/* Special instructions input */}
            <label>
                <h4>{`Special Instructions `}</h4>
                <input 
                    type='text'
                    name='special'
                    id='special-text'
                />
            </label>
           
            <button disabled={disabled} id='order-button'>Add to Order</button>
            
            <div id='name-errors'>{errors.name}</div>
            
            </form>

        </div>
        
    )
};
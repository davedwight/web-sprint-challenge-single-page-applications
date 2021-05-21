import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import '../styles/App.css';
import Home from './Home';
import Form from './Form';
import * as yup from 'yup';
import schema from '../Validation/formSchema';
import axios from 'axios';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  olives: false,
  sausage: false,
  peppers: false,
  special: '',
};

const initialFormErrors = {
  name: ''
};

const initialOrders = [];

const initialDisabled = false;

const App = () => {

  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/order', newOrder)
      .then(res => {
        setOrders([...orders, res.data])
        console.log('Post response: ', res.data)
      })
      .catch(err => {
        console.log('Error: ', err)
      })
      .finally(setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    })
  }
  console.log('Form Values: ', formValues)

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      mushrooms: formValues.mushrooms,
      olives: formValues.olives,
      sausage: formValues.sausage,
      peppers: formValues.peppers,
      special: formValues.special.trim(),
    }
    postNewOrder(newOrder)
  }
  console.log('Orders: ', orders);

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      
      {/* Nav bar */}
      <nav>
        <h1 className='title'>Lambda Eats</h1>
        <div className = 'nav-links'>
          <Link to='/' className='button'>
            <button>Home</button>
          </Link>
        </div>
      </nav>
      {/* End nav bar   */}

      {/* Home page */}
      <Route exact path='/' component={Home} />
      {/* End home page */}

      {/* Order form */}
      <Route path='/pizza' >
        <Form 
          values={formValues} 
          change={inputChange} 
          disabled={disabled} 
          submit={formSubmit}
          errors={formErrors}
        />
      </Route>
      {/* End order form */}
    
    </div>
  );
};
export default App;

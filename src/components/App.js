import React from "react";
import { Route, Link } from "react-router-dom";
import '../styles/App.css'
import Home from './Home'
import Form from './Form'

const App = () => {
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
      <Route path='/' component={Home} />
      {/* End home page */}

      {/* Order form */}
      <Route path='/pizza' component={Form} />
      {/* End order form */}
    
    </div>
  );
};
export default App;

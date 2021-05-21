import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';

export default function Home(props) {
    return (
    <div>
        <div id='img-container'>
            <Link to='/pizza'>
                <button>Order Pizza</button>
            </Link>
        </div>
    </div>
    )
};
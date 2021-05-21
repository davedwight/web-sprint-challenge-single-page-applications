import React from 'react';
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
    <div>
        <Link to='/pizza'>
            <button>Order Pizza</button>
        </Link>
    </div>
    )
};
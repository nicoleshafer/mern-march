import React from 'react';
import { Link } from 'react-router-dom';
import ViewAll from './ViewAll';


const Details = () => {
    return (
        <div>
            <p>Details Page</p>
            <Link to="/" element={<ViewAll />}>Home</Link>
        </div>
    );
}

export default Details;

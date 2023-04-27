import React from 'react';
import { Link } from 'react-router-dom';
import ViewAll from './ViewAll';



const AddAuthor = () => {
    return (
        <div>

            <div className="container">
                    <h3> Add Author</h3>
                    <Link to="/" element={<ViewAll />}>
                    Home
                    </Link>
            


            </div>


        </div>
    );
}

export default AddAuthor;

import React from 'react';
import ViewAll from './ViewAll';
import { Link } from 'react-router-dom';

const EditOne = () => {
    return (
        <div>
            <div className="container">
                <h3>Edit Author</h3>
            <Link to="/" element ={<ViewAll />}> Home</Link>

            
      {/* <button type="button" className="btn btn-primary btn-lg">Large button</button> */}
            </div>
        </div>
    );
}

export default EditOne;

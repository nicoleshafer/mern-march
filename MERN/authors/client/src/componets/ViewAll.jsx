import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddAuthor from './AddAuthor';
import EditOne from './EditOne';


const ViewAll = (props) => {
    const navigate = useNavigate()

    const AboutHandler = (e) => {
        e.preventDefault();
        navigate("/authors/:_id")

    }
    const EditHandler = (e) => {
        e.preventDefault();
        navigate("/authors/edit/:_id")
    }


    return (
        <div>
            <div className="container">
                {/* // ! links  */}
                <Link to="/authors" element={<AddAuthor />} className='link-info seperateLinks'>Add New</Link>
                <Link to="/authors/edit/:_id" element={<EditOne />} className='link-info seperateLinks'>Edit</Link>

                <p>We have quotes by:</p>

                <div className="col-all">
                    <div className='col-1'>
                        <table >
                            <thead>
                                <tr>
                                    <th>Author</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Name will go here</th>
                                    <th>
                                        <button onClick={AboutHandler}
                                            className='btn-sm'>
                                            About
                                        </button>
                                        <button onClick={EditHandler}
                                            className='btn-sm'>
                                            Edit Author
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p>Quote of the day:</p>
                        </div>
                    </div>

                {/* // ! second column -----should this be a fancy sidebar instead????*/}

                    <div className="col-2" >
                        <img src="https://i.pinimg.com/originals/df/85/0d/df850d11fa24d1c8f83afddbb8b342bc.jpg" alt="reading" className='photo' />
                    </div>
                </div>

            </div>


        </div>
    );
}

export default ViewAll;

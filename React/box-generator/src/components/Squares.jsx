import React from 'react';

const Squares = () => {
    return (
        <div>
            <div className='inputDiv'>
                <h2>Color</h2>
                <form>
                    <input type="text" name='colorInput' />
                </form>
                <button>Add</button>
            </div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
        </div>
    );
}

export default Squares;


//hello
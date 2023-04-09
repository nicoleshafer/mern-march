import React, {useState} from 'react';

const Squares = (props) => {
const {changeColor, setChangeColor} = props
    return (
        <div className='boxContainer'>
            <div className="square" className="colorBlock"></div>
            <div className="square" className="colorBlock"></div>
            <div className="square" className="colorBlock"></div>
            <div className="square" className="colorBlock"></div>
            <div className="square" className="colorBlock"></div>
        </div>
    );
}

export default Squares;


//hello
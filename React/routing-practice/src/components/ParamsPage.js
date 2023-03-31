import React from 'react';
import { useParams } from 'react-router-dom';

const ParamsPage = (props) => {

    const {word, color, bgCol} = useParams();
    return (
        <div>
            {
                isNaN(word)?
                <p 
                style ={
                    color?
                    {color:color, backgroundColor:bgCol} :
                    null
                }
                >This is a word: {word}</p>
                :
                <p
                style ={
                    color?
                    {color:color, backgroundColor:bgCol} :
                    null
                }>This is a number: {word}</p>
            }


        </div>
    );
}

export default ParamsPage;

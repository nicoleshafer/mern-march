import Create from '../components/Create'
import All from '../components/All'
import React, { useState } from 'react';

const Main = (props) => {

    const [list, setList] = useState([]);

    return (
        <div>
            <Create list={list} setList={setList}/>
            <All list={list} setList={setList}/>
        </div>
    );
}

export default Main;

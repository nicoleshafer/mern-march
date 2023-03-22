import React, {useState} from 'react';

const List = () => {
    const [input, setInput] = useState("");

    // const createListItem = () => {
        
    // }


    return (
        <div>
            <div className="App">
                <div className="container">
                    <div className="input" >
                        <input 
                        type="text" 
                        placeholder="Get Mern blackbelt" 
                        />
                        <input type="text" />
                        <button className="addButton">ADD</button>
                    </div>


                    <div className="listItem">
                        <p>Make to-do list</p>
                        <input type="checkbox" />
                        <button className="deleteButton">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;

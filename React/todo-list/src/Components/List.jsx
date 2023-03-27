import React, { useState } from 'react';

const List = () => {

    const [newInputItem, setNewInputItem] = useState("");
    const [todoList, setTodoList] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();


        const item = {
            text: newInputItem,
            complete: false
        }

        setTodoList([...todoList, item])
        setNewInputItem("")
    }

    const deleteHandler = (idx) => {
        const array = todoList.filter((item, i) => {
            return i !== idx
        })

        setTodoList(array)
    }

    const checkboxHandler = (idx) => {
        const updatedItems = todoList.map((item, i) => {
            if (idx === i) {
                item.complete = !item.complete;

            }
            return item;
        })
        setTodoList(updatedItems)
    }




    return (
        <div>
                <div className='title'>
                <h1>To-Do List:</h1>
                </div>
            <div className='header'>
            <form onSubmit={(e) => { submitHandler(e) }}>
                <input
                    type="text"
                    onChange={(e) => { setNewInputItem(e.target.value) }}
                    value={newInputItem}
                    placeholder="Add Item"
                    />
                <button className='button'>Add Item</button>
            </form>
                    </div>
            {
                todoList.map((item, i) => {
                    const itemClass = []
                    if (item.complete) {
                        itemClass.push('active')
                    }
                    return (
                        <div key={i} className='todoSection'>
                            <span className={itemClass.join(' ')}> {item.text}</span>
                            <input type="checkbox" checked={item.complete} onChange={(e) => { checkboxHandler(i) }} />
                            <button onClick={(e) => {
                                deleteHandler(i)
                            }}
                            className="button">Delete</button>
                        </div>)
                })
            }
        </div>
    )
}

export default List;

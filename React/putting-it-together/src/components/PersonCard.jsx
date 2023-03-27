import React, {useState} from "react";


const PersonCard = (props) => {
    
   const [count, setCount] = useState(props.age)

    const addBirthday = () => {
        setCount(count+1)
    }
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <h4 className="age">Age: {count}</h4>
            <h4 className="hairColor">Hair Color: {props.hairColor}</h4>
            <button onClick={addBirthday}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}
export default PersonCard;




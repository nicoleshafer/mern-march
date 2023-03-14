import React from "react";

const PersonCard = (props) => {
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <h4 className="age">Age: {props.age}</h4>
            <h4 className="hairColor">Hair Color: {props.hairColor}</h4>
        </div>
    )
}
export default PersonCard;
import React from "react";

const Person = (props) => {

    return(
        <li style={{display: "flex", width:"100%", justifyContent:"space-between", marginBottom:"5px"}}>
            <span>{props.name}</span>
            <span>{props.phone}</span>
            <button value={props.name} onClick={() => props.deletePerson(props.id)}>delete</button>
        </li>
    )

}

export default Person;
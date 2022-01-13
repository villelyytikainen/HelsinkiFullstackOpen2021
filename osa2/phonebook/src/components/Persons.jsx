import Person from "./Person";


const Persons = (props) => {
    console.log(props.persons)
    if(props.filtered.length === 0){
        return(
        <ul style={{display: "flex", flexDirection: "column", alignItems:"start", width: "300px"}}>
            {props.persons.map(person => (
                <Person 
                    key={person.name} 
                    id={person.id}
                    name={person.name} 
                    phone={person.phoneNumber}
                    deletePerson={props.deletePerson} />
            ))}           
        </ul>
        )
    }
    else{
        return(
        <ul style={{display: "flex", flexDirection: "column", alignItems:"start", width: "300px"}}>
            {props.filtered.map(person => (
                <Person 
                    key={person.name} 
                    id={person.id}
                    name={person.name} 
                    phone={person.phoneNumber}
                    deletePerson={props.deletePerson} />
            ))}           
        </ul>
        )
    }

    // return(
    //     <ul style={{display: "flex", flexDirection: "column", alignItems:"start", width: "300px"}}>
    //         {props.persons.map(person => (
    //             <Person 
    //                 key={person.name} 
    //                 id={person.id}
    //                 name={person.name} 
    //                 phone={person.phoneNumber}
    //                 deletePerson={props.deletePerson} />
    //         ))}           
    //     </ul>
    // )
}

export default Persons;
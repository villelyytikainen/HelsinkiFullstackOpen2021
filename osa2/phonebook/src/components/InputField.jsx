const InputField = (props) => {

    return(
        <form onSubmit={props.addPerson}>
            <div>
                name: 
                    <input 
                        value={props.name} 
                        onChange={props.setName} 
                        onClick={props.emptyName} />
                phone number: 
                    <input 
                        value={props.phone} 
                        onChange={props.setPhone} 
                        onClick={props.emptyPhone} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )

}

export default InputField;
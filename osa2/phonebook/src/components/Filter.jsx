const Filter =(props) => {
    
    return(
        <div>
            <form>
                <input 
                    onChange={props.filtered}/>
            </form>
        </div>
    )
}

export default Filter
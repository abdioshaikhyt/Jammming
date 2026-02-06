import React, {useState} from "react";

function SearchBar() {
    const [input, setInput] = useState("");
    function handleSubmit(e) {
        e.preventDefault();

        if(validateInput(input)) {
            return;
        } else {
            //placeholder logic to state that the search will continue.
            console.log("search will go on now");
        }
    }   
    function validateInput(input) {
        const regExPattern = /^\s*$/;

    if (input === "" || regExPattern.test(input)) {
        return true;   
    }
    return false;      
}

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">
            </label>
            <input name="input" id="input" value={input} onChange={(e) => setInput(e.target.value)}>
            </input>
            <button type="submit">Search</button>
        </form>
      </div>  
    );
}


export default SearchBar;
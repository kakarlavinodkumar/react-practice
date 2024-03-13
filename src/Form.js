import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import DisplayList from "./ItemList";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    
    const submitHandler = (e) => {
        console.log("event target : ", e.target.name);
        console.log("event value : ", e.target.value);
        console.log("Form submit event is called");
    }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {   
        setLastName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return(<div>
        <form >
            <label>
                First Name
                <input type="text" name="firstname" value={firstName} onChange={onChangeFirstName}></input>    
            </label>
            
            <br></br>
            <label>
                Last Name
                <input type="text" name="lastname" value={lastName} onChange={onChangeLastName}></input>
            </label>
        
            <br></br>
            <label>
                Password
                <input type="password" name="password" onChange={onChangePassword}></input>
            </label>
            
            <br></br>
            <button type="submit" name="submit" onClick={submitHandler}>Submit</button>
           
        </form>
        
            <DisplayList parent="Form"/>
            {/* </DisplayList> */}
        
    </div>);
}

export default Form;
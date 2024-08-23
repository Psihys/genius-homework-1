import React, { useState } from "react";
import "./home.css"
import Regestration from "./regestrationForm"
import AccountInfo from "./account"

const Home = () => {

    const [ name, useName ] = useState("");
    const [lastName, uselastName ] = useState("");
    const [ city, useCity ] = useState("");
    const [age, useAge] = useState("");
    const [email, useEmail] = useState("");
    const [password, usePassword] = useState("");
    const [acc, useAccount] = useState(false);


    const ChangeName = (event) => {
        useName( event.target.value );
    }
   const ChangeLastName = (event) => {
        uselastName( event.target.value );
    }
    const ChangeCity = (event) => {
        useCity( event.target.value );
    }

      const ChangeAge = (event) => {
        useAge( event.target.value );
    }

    const ChangeEmail = (event) => {
        useEmail( event.target.value );
    }

     const ChangePassword = (event) => {
        usePassword( event.target.value );
    }

    const OnSubmit = () => {
        useAccount(true);
    }

    // const SubmitReturn = () => {
    //      useAccount(false);
    // }

    const CheckPass = (password) => {
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
        
        return passw.test(password);
    }

    const checkEmail = (email) => {
         var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        return validRegex.test(email);
    }

    const ValidationForm = () => {
        return checkEmail(email) && CheckPass(password)
    }
    

    return (<div className="block">
        {acc ? <AccountInfo
            name={name}
            lastName={lastName}
            city={city}
            age={age}
            email={email}
            password = {password}
        /> : <Regestration
            ChangeName={ChangeName}
            ChangeLastName={ChangeLastName}
            ChangeCity={ChangeCity}
            ChangeAge={ChangeAge}
            ChangeEmail={ChangeEmail}
            ChangePassword={ChangePassword}
                OnSubmit={OnSubmit}
                ValidationForm={ValidationForm}
            name={name}
            lastName={lastName}
            city={city}
            age={age}
            email={email}
            password = {password}
        />}
    </div>
    )

   
}

export default Home;
import React from "react";
import "./home.css"

const AccountInfo = ({name, lastName, city, age, email, password}) => {

    return (<div className="block">
        <p> Personal Account</p>
        <div>
            <p>Name:</p>
            <p>{name}</p>
        </div>
        <div>
            <p>lastName:</p>
            <p>{lastName}</p>
        </div>
        <div>
            <p>city:</p>
             <p>{city} </p>
        </div>
        <div>
            <p>Age:</p>
            <p>{age}</p>
        </div>
        <div>
            <p>email:</p>
            <p>{email}</p>
        </div>
        <div>
            <p>password:</p>
             <p>{password} </p>
        </div>
    </div>
    )

   
}

export default AccountInfo;
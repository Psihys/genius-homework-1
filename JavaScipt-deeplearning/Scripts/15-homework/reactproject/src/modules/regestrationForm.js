import React, { useState } from "react";
import "./home.css"

const Regestration = ({ name, lastName, city, age, email, password, ChangeName, ChangeLastName,
    ChangeCity,ChangeAge,ChangeEmail,ChangePassword,OnSubmit,ValidationForm
}) => {

    return (<div className="block">
        <p>Regestration Form</p>
        <form className="form">
            <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(event)=>ChangeName(event)} ></input>
            </div>
           
            <div>
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(event)=>ChangeLastName(event)}></input>
            </div>
            
            <div>
            <label>City</label>
            <input type="text" value={city} onChange={(event)=>ChangeCity(event)}></input>
            </div>
            
            <div>
            <label>Age</label>
            <input type="nummber" value={age} onChange={(event)=>ChangeAge(event)}></input>
            </div>

            <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(event)=>ChangeEmail(event)}></input>
            </div>

            <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(event)=>ChangePassword(event)}></input>
            </div><br></br>
            
            {ValidationForm() && <button onClick={OnSubmit}>Submit!!!</button>
            
            }
        
        </form>
    </div>
    )

   
}

export default Regestration;
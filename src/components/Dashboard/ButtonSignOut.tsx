"use client";

import { signOut } from "next-auth/react";



const ButtonSignOut = () => {


    return (

        <button onClick={()=>{

            signOut()
        }} className="btn btn-primary">
            sign out
        </button>

    );



}

export default ButtonSignOut;
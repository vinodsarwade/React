import React from "react";

export const EventDemo = () =>{
    const handleEvent=()=>{
        console.log("click event")
        alert("button click event");
    }
    return(
        <div>
            <button onClick={handleEvent}>click</button>
        </div>
    )
}
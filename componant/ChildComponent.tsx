import React from "react";

export const ChildComponent=(Props:any)=>{
    return(
        <div>
            <button onClick={Props.greetParent("hello from child")}>Child</button>
        </div>
    )
}
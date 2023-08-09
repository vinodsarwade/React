import React from "react";
import { ChildComponent } from "./ChildComponent";

export const ParentComponent = ()=>{
    const SayHello=(msg:any)=>{
        alert(msg);
    }
    return(
        <div>
            <ChildComponent greetParent={SayHello}></ChildComponent>
        </div>
    )
}
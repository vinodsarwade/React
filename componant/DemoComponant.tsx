
//in this file we are creating a function and rendering it at App.tsx file
import React from "react";
import react, { useState } from 'react';

export const DemoComponent = () => {
    return (<h1>Hello from function component</h1>)
}



//this are the function (Funf)and DemoComponent  returning returning the h1(header statement)
//we are importing/rendering this function in App.tsx file  in Function APP folder
export const Funf=()=>
{
    return(<h1>hello world !!</h1>)
    // return<h1>capgemini</h1>
}

export let Cpg=()=>{
    return<h1 style={{color:'red'}}>vinod from 5G</h1>
}


//demo for useState

export const MyComponent = () => {
    const [count, setCount] = useState(0);
  
    // Other component logic
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
  
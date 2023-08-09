import { time } from "console";
import React, { useEffect, useState } from "react";

export const UseStateDemo =()=>{
    const [count,setCount]=useState(0);


    //use effect
    useEffect(()=>{
        document.title =`You clicked ${count}times`;

    },[])   
    //use effect is used to perform side effect in function
    //[]empty array is used to call once only for first render
    //it is a lifecycle event it called autometically
    //whenever u update state component will be rerender then useEffect start

    
    const increment=()=>setCount(count+2);
    const decrement=()=>setCount(count-2);
    return(
        <div>
            the count value is: {count}
            <button style={{color:'green'}}onClick={increment}> Increment</button>
            
            <button style={{color:'red'}} onClick={decrement}>Decrement </button>
        </div>
    )
}
// export const UseStateDemoDecrement =()=>{
//     const [count,setCount]=useState(0);
//     const Decrement=()=>setCount(count-2);
//     return(
//         <div>
//             the count value is: {count}
//             <button onClick={Decrement}>Decrement by 2</button>
//         </div>
//     )
// }

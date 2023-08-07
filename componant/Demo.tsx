import React from 'react';

type propsType={
    name:string,
    address:string,
    empId:number,
    num:number
}
export const Demo=(props:any)=>
{
    return (<div>
        <h1>helllo all prpos here</h1>
        {props.name}
        {props.address}
        {props.num}
        {props.empId}
    </div>)
}

interface product
{
    id:number,
    name:string,
    price:number
}
export const Arr = () =>
{
    const products:product[]=[
        {id:1001,name:"laptop",price:7000},
        {id:1002,name:"headphone",price:8000},
        {id:1003,name:"tablet",price:1100},
        {id:1004,name:"tv",price:2000}];

        return(
            <div>
                <table >

                    <th>

                        <td>Name</td>

                        <td>Price</td>

                    </th>    
                
                        {products.map(product => (

                        <tr key={product.id}>

                        {product.name}

                        {product.price}

                        </tr>

                    ))}
                
                </table>
                
            </div>
        )
}

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';

type propsType={
    name:string,
    address:string,
    empId:number,
    num:number
}
export const Arr=(props:any)=>
{
    return (<div>
        <h1 style={{border:'black',color:'red'}}>hello all prpos here</h1>
        {props.name}
        {props.address}
        {props.num}
        {props.empId} 
        
    </div>)
}

//array example

interface product
{
    id:number,
    name:string,
    price:number
}
export const Demo = () =>
{
    const products:product[]=useContext(ProductContext)
        // {id:1001,name:"laptop", price:7000},
        // {id:1002,name:"headphone", price:8000},
        // {id:1003,name:"tablet", price:1100},
        // {id:1004,name:"tv", price:2000};

        return(
            <div>
                <table className='table table-striped'>

                    <th>

                        <td scope='col'>Name</td>

                        <td scope='col'>Price</td>

                    </th>    
                
                        {products.map(product => (

                        <tr key={product.id}>

                        <td>{product.name}</td>

                        <td>{product.price}</td>

                        <td><Link to={`/EditProduct/${product.id}`}> Edit </Link></td>
                        <td><Link to={`/addProduct/${product.id}`}> Add </Link> </td>

                        </tr>

                    ))}
                
                </table>
                
            </div>
        )
}

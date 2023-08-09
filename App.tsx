import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cpg, DemoComponent, Funf, MyComponent } from './componant/DemoComponant';
import { ClassComponent } from './componant/ClassComponent';
import { Arr, Demo } from './componant/Demo';
import { EventDemo } from './componant/EventDemo';
import { ParentComponent } from './componant/ParentCpmponent';
import { UseStateDemo } from './componant/USeStateDemo';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AboutUs from './componant/AboutUs';
import ContactUs from './componant/ContactUs';
import { Navigations} from './componant/Navigations';
import PageNotFound from './componant/PageNotFound';
import { EditProduct } from './componant/EditProduct';
import AddProduct from './componant/AddProducts';
import { MyContext, ProductContext } from './componant/ProductContext';
import { Product } from './componant/Product';

function App() {
  // const msg="hello";
  const products:Product[]=[
    
    {id:1001,name:"Laptop",price:70000},
    {id:1002,name:"Headphone",price:7000},
    {id:1003,name:"Tablet",price:7000},
    {id:1004,name:"TV",price:50000}];
  
  return (
    <div>
      <ProductContext.Provider value={products}>
      {/* <DemoComponent></DemoComponent>
      <ClassComponent></ClassComponent>
      <Demo name="vinod " address="tuljapur " empId={5257} num={83874883832}></Demo>
      <Arr></Arr>
      <Funf></Funf>
      <Cpg></Cpg>
      <MyComponent></MyComponent>
      <EventDemo></EventDemo>
      <ParentComponent></ParentComponent>
      <UseStateDemo></UseStateDemo>
      <UseStateDemoDecrement></UseStateDemoDecrement> */}
      
      
    
        <Router>
          <Navigations></Navigations>
          <Routes>
            <Route path='/'element={<Demo></Demo>}></Route>
            <Route path='/aboutus/:name'element={<AboutUs></AboutUs>}></Route>
            <Route path='/contactus'element={<ContactUs></ContactUs>}></Route>
            <Route path='Demo' element={<Demo></Demo>}></Route>
            <Route path='Arr' element={<Arr></Arr>}></Route>
            <Route path='editProduct /:id' element={< EditProduct></EditProduct>}></Route>
            <Route path="/Addproduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
            {/* <Route path='productDetails/:id'element={<ProductDetails></ProductDetails>}></Route> */}
          

          </Routes>
        </Router>
        </ProductContext.Provider>
      
    
    </div>

  
  )
}

export default App;

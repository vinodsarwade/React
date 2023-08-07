import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Cpg, DemoComponent, Funf } from './componant/DemoComponant';
import { ClassComponent } from './componant/ClassComponent';
import { Arr, Demo } from './componant/Demo';

function App() {
  return (
    <div>
      <DemoComponent></DemoComponent>
      <ClassComponent></ClassComponent>
      <Demo name="vinod " address="tuljapur " empId={5257} num={83874883832}></Demo>
      <Arr></Arr>
      <Funf></Funf>
      <Cpg></Cpg>
        
      
    
    </div>
  
  )
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DemoComponent } from './componant/DemoComponant';
import { ClassComponent } from './componant/ClassComponent';
import { Arr, Demo } from './componant/Demo';

function App() {
  return (
    <div>
      <DemoComponent></DemoComponent>
      <ClassComponent></ClassComponent>
      <Demo name="vinod " address="tuljapur " empId={5257}></Demo>
      <Arr></Arr>
    
    </div>
  
  )
}

export default App;

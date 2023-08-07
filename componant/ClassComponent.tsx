import { colors } from "grommet/themes/base";
import React from "react";

export class ClassComponent extends React.Component<any,any>
{
    constructor(props:any)
    {
        super(props);
        this.state ={name:"jhon ",address:"pune"}
    }
    render(): React.ReactNode {
        return (
        <div>
        <h1 style={{color:" Red"}}>hello from class component</h1>
        <p>{this.state.name}</p>
        <p>{this.state.address}</p>

        </div>
        )
    }
}
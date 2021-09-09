import React from 'react';
import '../../index.css'


export class Opciones extends React.Component{

    

    render(){
        return(
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={this.props.click}>A</button>
                    <h2>{this.props.opcion.a}</h2>
                    {/*console.log(this.props.opcion.a)*/}
                </div>
                
                <div className="opcion">
                    <button id="B" className="botones" onClick={this.props.click}>B</button>
                    <h2>{this.props.opcion.b}</h2>
                    {/*console.log(this.props.opcion.b)*/}
                </div>
            </div>
        )
    }
}
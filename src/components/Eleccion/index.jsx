import React from 'react';
import '../../index.css'

export class Eleccion extends React.Component{
    render(){
        return(
            <div className="recordatorio">
                <h3>Seleccion anterior: {this.props.anterior}</h3>

                <h3>Historial de opciones elegidas:</h3>
                <ul>
                {this.props.selecciones.map((ele, i )=> <li key={i}>{ele}</li>)}
                </ul>
            </div>
        )
    }
}
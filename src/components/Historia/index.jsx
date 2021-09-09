import React from 'react';
import data from "../data";
import { Opciones } from '../Opciones';
import { Eleccion } from '../Eleccion';
import '../../index.css'

export class Historia extends React.Component{
    constructor(){
        super()
        this.state = {
            posicion : 0,
            seleccionAnterior: "",
            listaSelecciones: []
        };
    }


    //Con este manejador irá saltando los espacios en el JSON
    handleOption = (e) => {

        //No permitir cambiar de estado el accionar de los botones despues de encontrarmos en la posicion 6 del JSON
        if(this.state.posicion<7){
            if (e.target.id === "A" && this.state.seleccionAnterior !=="A"){
                //Si escoge la opcion a  pero antes No tenia ninguna o tenia b solo saltará un espacios
                this.setState({seleccionAnterior:"A"})
                this.setState({posicion: this.state.posicion + 1})
                
            }else if(e.target.id === this.state.seleccionAnterior){
                //Si escoge la opcion a/b  pero antes tenia la misma opcion saltará dos espacios
                this.setState({seleccionAnterior:e.target.id})
                this.setState({posicion: this.state.posicion + 2});

            }else if (e.target.id === "B" && this.state.seleccionAnterior === "A") {
                //Si escoge la opcion b pero antes tenia la a, se saltará tres espacios
                this.setState({seleccionAnterior: "B"});
                this.setState({posicion: this.state.posicion + 3})

            }else if (e.target.id === "B") {
                //Si escoge la opcion b pero antes tenia nada saltará dos espacios
                this.setState({seleccionAnterior: "B"});
                this.setState({posicion: this.state.posicion + 2})

            }
        } else{
            alert("FIN")
            this.setState({posicion:0, seleccionAnterior: "", listaSelecciones:[]})
        }
    }


    componentDidMount(){
        console.log("Componente montado")
    }

    
    componentDidUpdate(){
        this.state.listaSelecciones.push(this.state.seleccionAnterior)
        console.log("Componente actualizado")
    }
    
    componentWillUnmount(){
        if(this.state.posicion>6){
            this.setState({posicion:0, seleccionAnterior: "",listaSelecciones:[]})
            console.log("Componente desmontado")
        }
    }



    render(){
        return(
            <div className="layout">
                <h1 className="historia">{data[this.state.posicion].historia}</h1>
                
                <Opciones opcion={data[this.state.posicion].opciones} click={this.handleOption}/>

                <Eleccion anterior={this.state.seleccionAnterior} selecciones={this.state.listaSelecciones}/>
            </div>
        )
    }
}
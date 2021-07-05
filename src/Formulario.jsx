import React, { Component } from "react"

class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarCorreo = this.cambiarCorreo.bind(this);
        this.cambiarFecha = this.cambiarFecha.bind(this);
    }

    //  this.setState({})

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }

    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }

    componentDidMount() {
        //let elemento = document.getElementById("componentForm");
        //console.log(elemento);

        this.intervaloFecha = setInterval(() =>{
            this.cambiarFecha()
            console.log(new Date())
        },
        1000)
    }

    componentDidUpdate(prevProps, prevState) {
        /*console.log(prevProps);
        console.log(prevState);
        console.log("-------");*/
    }

    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }

    render() {

        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.formName}</h1>
                <form id="componentForm">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input 
                                type="text" 
                                onChange={this.cambiarNombre} 
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo Electronico</label>
                            <input 
                                type="email"
                                onChange={this.cambiarCorreo}
                            />
                        </div>
                    </div>
                </form>

                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>

                <div>
                    <p>Hora actual: {this.state.fecha.toLocaleTimeString()}</p>
                </div>
            </div>
        )
    }
}

export default Formulario
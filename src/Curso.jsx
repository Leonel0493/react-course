import React, { Fragment } from 'react'

const mayorDeEdad = edad => edad >= 18
const persona = { "nombre": "Leonel", "apellido": "Rivas", "edad": 17 }

const Curso = () => (
    <article className="s-shadow-bottom">

        <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src="https://ed-grid.com/assets/img/poster-curso.png" alt="Curso Imagen" />
        </div>

        <div className="s-bg-white s-pxy-2">
            <h3>{`Hola, me llamo ${persona.nombre} y tengo ${persona.edad}`}</h3>
            <p className="s-mb-0">
                {
                    mayorDeEdad(persona.edad) ? "Soy mayor de edad" : "Soy menor de edad"
                }
            </p>
        </div>
        <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">

            <div className="s-10 s-mr-1">

                <div className="circle ">
                    <img src="https://ed-grid.com/assets/img/alexys.jpg" alt="foto del profesor" />
                </div>

            </div>
            <p className="s-mb-0">{`Prof. ${persona.nombre} ${persona.apellido}`}</p>

            <div className="button s-to-right">$40USD</div>
        </footer>
    </article>
)

export default Curso
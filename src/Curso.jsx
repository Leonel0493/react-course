import React, { Fragment } from 'react'

const curso = {
    "title": "Curso Bases de Datos Desde Cero",
    "description": "Diseña, estructura y administra bases de datos SQL y crea un sistema de facturación",
    "image": "https://ed-grid.com/assets/img/poster-curso.png",
    "price": "40Usd"
}

const Curso = () => (
    <article className="s-shadow-bottom">

        <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src={curso.image} alt={curso.title} />
        </div>

        <div className="s-bg-white s-pxy-2">
            <h3>{curso.title}</h3>
            <p className="s-mb-0">{curso.description}</p>
        </div>
        <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">

            <div className="s-10 s-mr-1">

                <div className="circle ">
                    <img src="https://ed-grid.com/assets/img/alexys.jpg" alt="foto del profesor" />
                </div>

            </div>
            <p className="s-mb-0">Prof. Alexys Lozada</p>

            <div className="button s-to-right">{`$ ${curso.price}`}</div>
        </footer>
    </article>
)

export default Curso
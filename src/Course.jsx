import React from "react"

const Course = props => (
    <div className="ed-grid m-grid-3">
        <h1 className="m-cols-3">Nombre del curos</h1>
        <img 
            className="m-cols-1" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png" 
            alt="Imgen" 
        />
        <p className="m-cols-2">Descripcion</p>
    </div>
)

export default Course
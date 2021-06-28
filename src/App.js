import React, { Fragment } from 'react'
import Curso from './Curso';
import "./Styles/style.scss"

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://i.pinimg.com/originals/e7/38/db/e738db3d88bc3c53cf29706f26031fd5.png" alt="Banner Image" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteam</p>
            <p>Tu futuro te esta esperando</p>
            <a href="#" className="button">Suscribete</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso />
    </div>
  </>
)

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componente deben devolver UN solo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos 
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra
// 6: clas => className
// 7: for => htmlFor
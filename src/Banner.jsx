import React from 'react'

const Banner = () =>(
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
)

export default Banner
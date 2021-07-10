import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = () => (
    <header className="ed-header s-bg-grey s-py-2">
        <div className="ed-grid lg-grid-5">

            <div className="s-cross-center s-main-center lg-main-start">
                <img className="logo" src="https://ed.team/static/images/logo.svg" />
            </div>
            <nav className="nav lg-cols-4 s-cross-center ed-grid full">

                <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">

                    <li className="lg-mr-3">
                        <NavLink activeClassName="active" className="link s-column s-cross-center" to="/" exact>

                            <svg className="icon to-lg s-mb-0">
                                <use to="#home"></use>
                            </svg>
                            <span>Inicio</span>
                        </NavLink>
                    </li>
                    <li className="lg-mr-3">
                        <NavLink activeClassName="active" className="link s-column s-cross-center" to="/cursos">
                            <svg className="icon to-lg s-mb-0">
                                <use to="#studies"></use>
                            </svg>
                            <span>Cursos</span>
                        </NavLink>
                    </li>
                    <li className="lg-mr-3">
                        <NavLink activeClassName="active" className="link s-column s-cross-center" to="/formulario">
                            <svg className="icon to-lg s-mb-0">
                                <use to="#courses"></use>
                            </svg>
                            <span>Formulario</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
        </div>
    </header>
)

export default MainMenu
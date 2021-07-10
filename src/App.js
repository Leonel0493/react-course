import React, { Fragment } from 'react';
import Banner from './Banner';
import CourseGrid from './CourseGrid';
import Course from './Course';
import Formulario from './Formulario';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from './MainMenu';
import "./Styles/style.scss";
import "./Styles/header.scss"



const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/formulario" component={() => <Formulario name="Pagina de Contacto" />} />
      <Route component={
        () => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <samp>Página no encontrada</samp>
          </div>
        )}
      />
    </Switch>
  </Router>
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
// 8: nomenclatura para parametros por ruta es :nombreParametro
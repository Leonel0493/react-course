import React, { Fragment } from 'react';
import Curso from './Curso';
import Banner from './Banner';
import Formulario from './Formulario';
import "./Styles/style.scss";

/*const cursos = [
  {
    "titulo": "Curso de Rasengan",
    "image": "https://laverdadnoticias.com/__export/1606513512175/sites/laverdad/img/2020/11/27/naruto_5_jutsu_que_encajarian_mejor_con_el_heroe_de_konoha_que_rrasengan.jpg_1183029055.jpg",
    "description": "Poderoso Ninjutsu de Rango A creado originalmente por el Cuarto Hokage, Minato Namikaze",
    "price": 40,
    "profesor": "Kanohamaru",
    "prof_image": "https://laverdadnoticias.com/__export/1615568724533/sites/laverdad/img/2021/03/12/konohamaru_sarutobi_boruto_anime.jpg_514966513.jpg"
  },
  {
    "titulo": "Taijutsu",
    "image": "http://pm1.narvii.com/6261/35e120a41b3d026c939a67e13327ec30619b1892_00.jpg",
    "description": "El Taijutsu son todos aquellos jutsus que tienen que ver con el combate mano a mano",
    "price": 25,
    "profesor": "Rock Lee",
    "prof_image": "http://images6.fanpop.com/image/photos/34800000/rock-lee-rock-lee-fanfic-pictures-34826515-600-450.jpg"
  },
  {
    "titulo": "Dojutsu",
    "image": "https://www.cultture.com/pics/2020/11/naruto-en-que-dojutsu-te-basarias-para-tu-signo-del-zodiaco-0.jpg",
    "description": "Un Dojutsu es un tipo de técnica ninja que existe en el universo ficticio del manga y anime Naruto",
    "price": 35,
    "profesor": "Hanabi",
    "prof_image": "https://pm1.narvii.com/6801/79fe99d902ca0f453650913c85ff0834e1b8fa41v2_hq.jpg"
  }
]*/

const App = () => (
  <>
    <Banner />
    <Formulario formName="clase de Edteam"/>
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
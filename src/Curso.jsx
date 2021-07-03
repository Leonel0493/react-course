import React, { Fragment } from 'react'

const Curso = ({title, image, description, price, profesor, prof_image}) => (
    <article className="s-shadow-bottom" id={title}>

        <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src={image} alt={title} />
        </div>

        <div className="s-bg-white s-pxy-2">
            <h3>{title}</h3>
            <p className="s-mb-0">{description}</p>
        </div>
        <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">

            <div className="s-10 s-mr-1">

                <div className="circle ">
                    <img src={prof_image} alt="foto del profesor" />
                </div>

            </div>
            <p className="s-mb-0">{`Prof. ${profesor}`}</p>

            <div className="button s-to-right">{`$ ${price}`}</div>
        </footer>
    </article>
)

export default Curso
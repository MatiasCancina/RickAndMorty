import React from 'react'
import style from "./about.module.css"
// import imagen from '../../assets/rym_img_about.png'

const about = () => {
    return (
        <div className={style.aboutContainer}>
                <p className={style.nombre}>Matias Cancina</p>
            <div className={style.imagenAbout}></div>
            <div>
                <p className={style.info}>I'm 18-year-old web developer student from Buenos Aires, Argentina. I've been learning web development at SoyHenry since March. During my time there, I've gained a strong grasp of programming languages like HTML, CSS, and JavaScript.</p>
            </div>
        </div>
    )
}

export default about
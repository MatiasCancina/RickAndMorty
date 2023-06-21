import React from 'react'
import style from "./about.module.css"
// import imagen from '../../assets/rym_img_about.png'

const about = () => {
    return (
        <div className={style.aboutContainer}>
                <p className={style.nombre}>Matias Cancina</p>
            <div className={style.imagenAbout}></div>
            <div>
                <p className={style.info}>Tengo 18 años, soy de Buenos Aires, Argentina. Empecé a estudiar en SoyHenry a principios de marzo porque me interesaba el desarrollo de paginas web y esta fue la primera que hice con los conocimientos que fui aprendiendo en estos meses.</p>
            </div>
        </div>
    )
}

export default about
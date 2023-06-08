import React from 'react'
import Cards from '../../components/Cards/Cards'
import style from "./cards.module.css"
const CardsPage = ({ characters, onClose }) => {
    return (
        <div className={style.container}>
            <Cards
                characters={characters}
                onClose={onClose}
            />
        </div>
    )
}

export default CardsPage
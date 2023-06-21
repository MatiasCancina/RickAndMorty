import { useDispatch, useSelector } from "react-redux"
import Cards from "../Cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from './Favourites.module.css';

const Favourites = ({ onClose, character }) => {

    const myFavourites = useSelector(state => state.myFavourites)
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);


    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={style.container}>
            <div className={style.filterContainer}>
                <select className={style.select} onChange={handleOrder}>
                    <option disabled selected value="">ORDER</option>
                    {['Ascendente', "Descendente"].map(order => (
                        <option value={order}>{order}</option>
                    ))}
                </select>

                <select className={style.select} onChange={handleFilter}>
                    <option disabled selected value="">GENDER</option>
                    {['All', "Male", "Female", "Genderless", "unknown"].map(gender => (
                        <option value={gender}>{gender}</option>
                    ))}
                </select>
            </div>

            <Cards characters={myFavourites} onClick={() => onClose(character.id)} />
        </div>
    )
}

export default Favourites
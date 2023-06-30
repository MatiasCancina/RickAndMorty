import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { filterCards, orderCards } from "../../redux/actions";
import Cards from "../Cards/Cards";
import style from './Favorites.module.css';

const Favorites = ({ onClose }) => {

    const myFavorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    console.log(myFavorites);
    return (
        <div className={style.container}>
            <div className={style.filterContainer}>

                <select className={style.select} onChange={handleOrder}>
                    <option disabled selected value="">ORDER</option>
                    {['Ascendente', "Descendente"].map(order => (
                        <option key={Math.random()*10} value={order}>{order}</option>
                    ))}
                </select>

                <select className={style.select} onChange={handleFilter}>
                    <option disabled selected value="">GENDER</option>
                    {['All', "Male", "Female", "Genderless", "unknown"].map(gender => (
                        <option key={Math.random()*10} value={gender}>{gender}</option>
                    ))}
                </select>

            </div>
            <Cards characters={myFavorites} onClick={onClose} />
        </div>
    )
}

export default Favorites
import { useDispatch, useSelector } from "react-redux"
import Cards from "../Cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import style from './Favourites.module.css';
import { useState } from "react";

const Favourites = () => {

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
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>

            </select>
                <select name="" id="" onChange={handleFilter}>
                    <option value="all">All </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless ">Genderless </option>
                    <option value="unknown">unknown</option>
                </select>
            <Cards characters={myFavourites}></Cards>
        </div>
    )
}

export default Favourites
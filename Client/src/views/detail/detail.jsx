import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./detail.module.css"

const Detail = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((res) => {
                if (res.data.character.name) { 
                    setCharacter(res.data.character);
                }
            })
            .catch((err) => {
                throw Error(err);
            });
    }, [id]);

    return (
        <div className={style.detailContainer}>
            <div className={style.info}>
                <h1>{character.name}</h1>
                <h3>STATUS | {character.status}</h3>
                <h3>SPECIE | {character.species}</h3>
                <h3>GENDER | {character.gender}</h3>
                <h3>FIRST SEEN | {character.origin?.name}</h3>
                <h3>LAST SEEN | {character.location?.name}</h3>
            </div>

            <div className={style.imageContainer}>
                <img className={style.imageCharacter} src={character.image} alt={character.name} />
            </div>
        </div>
    );
}

export default Detail;
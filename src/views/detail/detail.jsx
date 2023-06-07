import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./detail.module.css"

const Detail = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({})


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((error) => {
                window.alert(error);
            });
        return setCharacter({});
    }, [id]);

    return (
        <div className={style.detailContainer}>
                <div className={style.info}>
                    <h1>{character.name}</h1>
                    <h3>STATUS | {character.status}</h3>
                    <h3>SPECIE | {character.species}</h3>
                    <h3>GENDER | {character.gender}</h3>
                    <h3>ORIGIN | {character.origin?.name}</h3>
                </div>

            <div className={style.imageContainer}>
                <img className={style.imageCharacter} src={character.image} alt={character.name} />
            </div>
        </div>
    );
}

export default Detail;
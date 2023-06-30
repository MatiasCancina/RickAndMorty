import Card from '../Card/Card';
import style from "./Cards.module.css"

const Cards = ({characters, onClose}) => {

   return (
      <div className={style.container}>
         {Array.isArray(characters) && characters?.map((character) => {
            return (
               <Card
               className={style.cardContainer} key={character.id}
               character={character}
               onClose={onClose}
               />
            )
         })}
      </div>
   );
}

export default Cards;
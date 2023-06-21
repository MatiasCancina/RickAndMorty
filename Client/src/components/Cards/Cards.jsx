import Card from '../Card/Card';
import style from "./Cards.module.css"

const Cards = (props) => {
   const { characters, onClose } = props;

   return (
      <div className={style.container}>
         {characters.map((character) => {
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
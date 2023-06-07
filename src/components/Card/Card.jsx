import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';
import style from "./Card.module.css"

const Card = (props) => {
   const { character, onClose, addFav, removeFav, myFavourites } = props;
   const [isOpen, setIsOpen] = useState(true);
   const navigate = useNavigate();
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();

   useEffect(() => {
      myFavourites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavourites, character.id]);

   const handleFavorite = (character) => {   //no tiene importancia el parametro(puede ser data tambien)

      if (!isFav) {
         addFav(character);
         setIsFav(true);
      } else {
         removeFav(character);
         setIsFav(false);
      }
   }

   const handleCardClose = () => {
      if (setIsOpen(false)) {
         onClose(character.id)
         dispatch(removeFav(character.id))
      }
   }


   const navigateHandler = () => {
      navigate(`/detail/${character.id}`);
   }

   return (
      isOpen && (
         <div className={style.container}>
            <div>
               <button className={style.closeButton} onClick={handleCardClose}>X</button>
               {
                  isFav ? (
                     <button onClick={() => handleFavorite(character.id)}>❤️</button>
                  ) : (
                     <button onClick={() => handleFavorite(character)}>🤍</button>
                  )
               }
            </div>
            <h5 className={style.id}>ID: {character.id}</h5>
            <h3 className={style.cardName}>{character.name}</h3>
            <img src={character.image} alt={character.name} onClick={navigateHandler} />
         </div>
      )
   );
}

const mapStateToProps = (state) => {
   return {
      myFavourites: state.myFavourites,
   }
}

const mapDispatchToProps = (dispatch) => {

   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card); 
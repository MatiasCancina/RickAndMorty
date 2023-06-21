import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './Card.module.css';

const Card = (props) => {
   const { character, onClose } = props;
   const myFavorites = useSelector(state => state.myFavorites)

   const navigate = useNavigate();
   const dispatch = useDispatch()
   const location = useLocation();

   const isOpen = true;
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, character.id]);

   const handleFavorite = () => {
      console.log(character);
      if (!isFav) {
         dispatch(addFav(character));
         setIsFav(true);
      } else {
         dispatch(removeFav(character.id));
         setIsFav(false);
      }
   };

   const navigateHandler = () => {
      navigate(`/detail/${character.id}`);
   };

   const shouldShowCloseButton = location.pathname === '/home';

   return (
      isOpen && (
         <div className={style.container}>
            {shouldShowCloseButton && (
               <button className={style.closeButton} onClick={() => onClose(character.id)}>X</button>
            )}
            {isFav ? (
               <p className={style.favBtn} onClick={handleFavorite}>❤️</p>
            ) : (
               <p className={style.favBtn} onClick={handleFavorite}>🤍</p>
            )}
            <div className={style.cardName}>
               <h3>{character.name}</h3>
            </div>
            <img src={character.image} alt={character.name} onClick={navigateHandler} />
            <h5 className={style.id}>ID: {character.id}</h5>
         </div>
      )
   );
};

export default Card;
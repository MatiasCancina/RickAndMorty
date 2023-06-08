import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import style from './Card.module.css';

const Card = (props) => {
   const { character, addFav, removeFav, myFavourites } = props;
   const navigate = useNavigate();
   const location = useLocation();
   const [isOpen, setIsOpen] = useState(true);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavourites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavourites]);

   const handleFavorite = (character) => {
      if (!isFav) {
         addFav(character);
         setIsFav(true);
      } else {
         removeFav(character);
         setIsFav(false);
      }
   };

   const navigateHandler = () => {
      navigate(`/detail/${character.id}`);
   };

   const onClose = () => {
      setIsOpen(false);
   };

   const shouldShowCloseButton = location.pathname === '/home';

   return (
      isOpen && (
         <div className={style.container}>
            {shouldShowCloseButton && (
               <button className={style.closeButton} onClick={onClose}>X</button>
            )}
            {isFav ? (
               <p className={style.favBtn} onClick={() => handleFavorite(character.id)}>❤️</p>
            ) : (
               <p className={style.favBtn} onClick={() => handleFavorite(character)}>🤍</p>
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

const mapStateToProps = (state) => {
   return {
      myFavourites: state.myFavourites,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
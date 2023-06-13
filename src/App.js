import Nav from './components/Nav/Nav';
import About from './views/about/about';
import Detail from './views/detail/detail';
import ErrorPage from './views/errorPage/errorPage.jsx'
import FormLogin from './components/Form/Form';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import "./App.css";
import Favourites from './components/Favourites/Favourites';
import CardsPage from './views/cardsPage/cardsPage';

const App = () => {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               const characterExists = characters.find(character => character.id === data.id);
               if (characterExists) {
                  window.alert('¡Este personaje ya ha sido ingresado!');
               } else {
                  setCharacters((characters) => [...characters, data]);
               }
            } else {
               window.alert('¡Busca un ID!');
            }
         });
   };

   function onClose(id) {
      let deleted = characters.filter(character => character.id !== Number(id));
      setCharacters(deleted);
   };

   return (
      <div className='app'>

         {location.pathname === '/' ? (
            <FormLogin />
         ) : (
            <div>

               <Nav onSearch={onSearch} />
               <Routes>

                  <Route exact path='/' element={FormLogin} />
                  <Route path='/home' element={<CardsPage characters={characters} onClose={onClose} />} />
                  <Route path='/detail/:id' element={<Detail />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/favourites' element={<Favourites />} />
                  <Route path='*' element={<ErrorPage />} />

               </Routes>
            </div>
         )}
      </div>
   )
}

export default App;
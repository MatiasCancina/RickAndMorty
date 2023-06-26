import Nav from './components/Nav/Nav';
import About from './views/about/about';
import Detail from './views/detail/detail';
import ErrorPage from './views/errorPage/errorPage.jsx'
import FormLogin from './components/Form/Form';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import "./App.css";
import Favorites from './components/Favorites/Favorites';
import CardsPage from './views/cardsPage/cardsPage';

const App = () => {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   async function onSearch(id) {
      try {
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (response.data.character.name) {
            const characterExists = characters.find(character => character.id === response.data.character.id);

            if (characterExists) {
               window.alert('This character has already been entered!');
            } else {
               setCharacters((characters) => [...characters, response.data.character]);
            }
         }
      } catch (error) {
         alert('¡Invalid ID!');
      }
   };

   function onClose(id) {
      let deleted = characters.filter(character => character.id !== +id);
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
                  <Route path='/favorites' element={<Favorites />} />
                  <Route path='*' element={<ErrorPage />} />

               </Routes>
            </div>
         )}
      </div>
   )
}

export default App;
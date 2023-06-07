import SearchBar from '../SearchBar/SearchBar'
import { NavLink, useNavigate } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = ({ onSearch, randomChar }) => {

    const navigate = useNavigate();

    function logout() {
        navigate('/');
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>RICK and MORTY</h1>

            <div className={style.barButtons}>
                <SearchBar onSearch={onSearch} randomChar={randomChar}/>

                <div className={style.containerBotones}>
                    <NavLink className={style.navLink} to='/home'>HOME</NavLink>
                    
                    <NavLink className={style.navLink} to='/favourites'>FAVOURITES</NavLink>

                    <NavLink className={style.navLink} to='/about' >ABOUT ME</NavLink>

                    <button className={style.logoutButton} onClick={logout}>Log out</button>
                </div>

            </div>
        </div>
    );
}

export default Nav;
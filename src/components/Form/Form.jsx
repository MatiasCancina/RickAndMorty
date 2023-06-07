import validation from "../utils/validation/validation";
import { useState } from "react";
import style from "./Form.module.css"

const FormLogin = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value,
            })
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setUserData({
            email: '',
            password: '',
        })
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.formContainer}>

                <label className={style.formTitle}>Login</label>
                <div className={style.imgContainer}>
                    <img className={style.loginImg} src="https://cdn.dribbble.com/users/920628/screenshots/5008493/media/4b6578521b23806232c649545fea180d.png?compress=1&resize=400x300" alt="loginImg" />
                </div>

                <div className={style.inputContainers}>

                    <label className={style.inputTitles}>EMAIL</label>
                    <input
                        type="text   "
                        placeholder=" Email..."
                        value={userData.email}
                        onChange={handleChange}
                        name="email"
                    />
                    <span className={style.errors}>{errors.email}</span>
                    <label className={style.inputTitles}>PASSWORD</label>
                    <input
                        type="password"
                        placeholder=" Password..."
                        value={userData.password}
                        onChange={handleChange}
                        name="password"
                    />
                    <span className={style.errors}>{errors.password}</span>
                </div>

                {errors.email || errors.password ? null : (
                    <div className={style.submitContainer}>
                        <button className={style.submit} type="submit">SIGN IN</button>
                    </div>
                )}

            </form>
        </div>
    )
}

export default FormLogin;
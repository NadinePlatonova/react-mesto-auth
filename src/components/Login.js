import React from 'react';

function Login() {
    return (
        <div className="reg-login">
            <div className="reg-login__container">
                <h2 className="reg-login__title">Вход</h2>
                <form className="reg-login__form" name="login" action="#">
                    <input className="reg-login__input" id="email" name="email" type="email" placeholder="Email" required></input>
                    <input className="reg-login__input" id="password" name="password" type="password" placeholder="Пароль" required></input>
                    <button className="reg-login__button" type="submit">Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
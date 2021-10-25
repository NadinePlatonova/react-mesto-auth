import React from 'react';
import { useHistory } from 'react-router-dom';
import * as auth from '../utils/auth';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    function handleEmailEdit(e) {
        setEmail(e.target.value);
    }

    function handlePasswordEdit(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        auth.authorize(email, password)
        .then((data) => {
            if (data.token) {
                // setEmail('');
                // setPassword('');
                props.handleLogin();
                history.push('/');
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }



    return (
        <div className="reg-login">
            <div className="reg-login__container">
                <h2 className="reg-login__title">Вход</h2>
                <form className="reg-login__form" name="login" action="#" onSubmit={handleSubmit}>
                    <input value={email} onChange={handleEmailEdit} className="reg-login__input" id="email" name="email" type="email" placeholder="Email" required></input>
                    <input value={password} onChange={handlePasswordEdit} className="reg-login__input" id="password" name="password" type="password" placeholder="Пароль" required></input>
                    <button className="reg-login__button" type="submit">Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
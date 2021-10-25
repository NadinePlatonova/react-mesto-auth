import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as auth from '../utils/auth';
import InfoTooltip from './InfoTooltip';

function Register(props) {
    const [isSuccess, setIsSuccess] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
    const history = useHistory();

    function handlePasswordEdit(e) {
        setPassword(e.target.value);
    }

    function handleEmailEdit(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        auth.register(email, password)
        .then((res) => {
            if (res) {
                setIsSuccess(true);
                setIsInfoTooltipOpen(true);
            } else {
                setIsSuccess(false);
                setIsInfoTooltipOpen(true);
            }
        })
    }

    function closeInfoTooltip() {
        setIsInfoTooltipOpen(false);
        if (isSuccess) {
            history.push('/sign-in')
        }
    }

    return (
        <div className="reg-login">
            <div className="reg-login__container">
                <h2 className="reg-login__title">Регистрация</h2>
                <form className="reg-login__form" name="login" action="#" onSubmit={handleSubmit}>
                    <input value={email} onChange={handleEmailEdit} className="reg-login__input" id="email" name="email" type="email" placeholder="Email" required></input>
                    <input value={password} onChange={handlePasswordEdit} className="reg-login__input" id="password" name="password" type="password" placeholder="Пароль" required></input>
                    <button className="reg-login__button" type="submit">Зарегистрироваться</button>
                </form>
            </div>
            <div className="reg-login__sign-in">
                <p className="reg-login__caption">Уже зарегистрированы? &nbsp;</p>
                <Link to="/sign-in" className="reg-login__link">Войти</Link>
            </div>
            <InfoTooltip isSuccess={isSuccess} isOpen={isInfoTooltipOpen} onClose={closeInfoTooltip} /> 
        </div>
    )
}

export default Register;
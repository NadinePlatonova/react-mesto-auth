import React from 'react';
import logo from '../images/logo.png';
import { Route, Switch, Link } from 'react-router-dom';

function Header(props) {

    return (
        <Switch>
            <Route exact path="/">
                <header className="header">
                    <img className="header__logo" src={logo} alt="Логотип Место" />
                    <div className="header__list">
                        <p className="header__item">{props.email}</p>
                        <button className="header__item header__link" onClick={props.onSignOut}>Выйти</button>
                    </div>
                </header>
            </Route>

            <Route path="/sign-in">
                <header className="header">
                    <img className="header__logo" src={logo} alt="Логотип Место" />
                    <Link to="/sign-up" className="header__item header__link">Регистрация</Link>
                </header>
            </Route>

            <Route path="/sign-up">
                <header className="header">
                    <img className="header__logo" src={logo} alt="Логотип Место" />
                    <Link to="/sign-in" className="header__item header__link">Войти</Link>
                </header>
            </Route>
        </Switch>
    )
}

export default Header
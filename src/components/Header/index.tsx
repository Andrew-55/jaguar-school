import React, { useState } from "react";
import classes from "./Header.module.scss";
import {NavLink} from "react-router-dom";

type ItemMenu = {
    path: string,
    name: string,
}

const arrItemMenu: ItemMenu[] = [
    {path: '/', name: 'Главная'},
    {path: '/about', name: 'О компании'},
    {path: '/services', name: 'Услуги'},
    {path: '/reviews', name: 'Отзывы о нас'},
    {path: '/contacts', name: 'Контакты'},
]



const Header: React.FC = () => {

    const [active, setActive] = useState(0);

    return (
        <header className={classes.header}>
            <div className={classes.header__logo}>Автошкола ЯГУАР</div>
            <div className={classes.header__items}>
                {arrItemMenu.map((item:ItemMenu, i:number) => {
                    return <div key={i} onClick={() => setActive(i)} className={`${classes.item__menu} ${active === i && classes.item__menu__active}`}><NavLink to={item.path}>{item.name}</NavLink></div>
                })}
            </div>
        </header>
    )
}

export default Header;
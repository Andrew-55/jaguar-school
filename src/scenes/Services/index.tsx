import React from "react";
import classes from "./Services.module.scss"
import motobike from "../../images/icons/icons-motorcycles.svg"

const Services: React.FC = () => {
    return (
        <main >
            <h1 className={classes.servicesHeader}>Услуги и цены</h1>
            <div className={classes.city}>
                <h2 className={classes.services__city}>Омск</h2>
                <ul className={classes.services__items}>
                    <li className={classes.services__item}>
                        <img className={classes.services__item__img} src={motobike} alt="motobike"/>
                        <div className={classes.services__item__desc}>Категория <span>A</span> мотоцикл</div>
                        <div className={classes.services__item__cost}>10000p</div>
                    </li>
                    <li className={classes.services__item}>
                        <div className={classes.services__item__desc}>Категория <span>B</span> легковой автомобиль</div>
                        <div className={classes.services__item__cost}>10000p</div>
                    </li>
                    <li className={classes.services__item}>
                        <div className={classes.services__item__desc}>Восстановление навыков вождения, <span>A</span> легковой автомобиль</div>
                        <div className={classes.services__item__cost}>600p/час</div>
                    </li>
                </ul>
            </div>
            <div className={classes.city}>
                <h2 className={classes.services__city}>Тара</h2>
                <ul className={classes.services__items}>
                    <li className={classes.services__item}>
                        <div className={classes.services__item__desc}>Категория <span>A</span> мотоцикл</div>
                        <div className={classes.services__item__cost}>10000p</div>
                    </li>
                    <li className={classes.services__item}>
                        <div className={classes.services__item__desc}>Категория <span>B</span> легковой автомобиль</div>
                        <div className={classes.services__item__cost}>10000p</div>
                    </li>
                    <li className={classes.services__item}>
                        <div className={classes.services__item__desc}>Категория <span>C</span> грузовой автомобиль</div>
                        <div className={classes.services__item__cost}>10000p</div>
                    </li>
                    <li className={classes.services__item}>
                        <div className={classes.services__item__desc}>Категория <span>D</span> автобус</div>
                        <div className={classes.services__item__cost}>10000p</div>
                    </li>
                    <li className={classes.services__item}>
                        <div className={classes.services__item__desc}>Категория <span>E</span> грузовой автомобиль с прицепом</div>
                        <div className={classes.services__item__cost}>10000p</div>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Services;
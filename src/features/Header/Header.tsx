import React from "react";
import s from "./header.module.scss";
import { Button, Svg } from "@/components";
import cn from "classnames";

interface HeaderProps{
  sliderIsOut: boolean
  openAppModal: () => void
}

export function Header({sliderIsOut, openAppModal}: HeaderProps) {
  return (
    <header className={cn(s.header, {[s.sliderIsOut]: sliderIsOut})}>
      <div className={s.container}>
        <div className={s.brandWrapper}>
          <Svg name="brand-icon" className={s.brandIcon} />
          <div className={s.devider}></div>
          <p className={s.brandText}>лизинговая компания</p>
        </div>
        <menu className={s.menu}>
          <nav>
            <ul className={s.navLinkList}>
              <li className={s.leazingLink}>
                <a className={s.navLink} href="#leazing">Лизинг</a>
                <LeazingNav/>
              </li>
              <li><a className={s.navLink} href="#catalog">Каталог</a></li>
              <li><a className={s.navLink} href="#info">О нас</a></li>
            </ul>
          </nav>
          <Button 
            className={s.headerSendBtn} 
            variant="light" 
            onClick={() => {openAppModal()}} 
          >Оставить заявку</Button>
        </menu>
        <button className={s.burgerBtn}>
          <Svg name="burger" className={s.burgerSvg}/>
        </button>
      </div>
    </header>
  );
}

const LeazingNav = () => (
  <ul className={s.leazingNavLinks}>
    <li><a className={s.navLink} href="#for-personal">Для личного пользования</a></li>
    <li><a className={s.navLink} href="#for-legal">Для юридических диц</a></li>
    <li><a className={s.navLink} href="#calculator">Калькулятор</a></li>
  </ul>
)

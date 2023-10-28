import { ModalWrapper } from '@/shared/ui'
import React, { useState } from 'react'
import s from './burgetMenu.module.scss'
import { Button, Svg } from '..'

interface BurgerMenuProps{
  isOpen: boolean
  onClose: () => void
  openAppModal: () => void
}

export function BurgerMenu({isOpen, onClose, openAppModal}: BurgerMenuProps) {
  
  const [ isLinksDisplay, setIsLinksDisplay] = useState(false)


  
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      className={s.burgerWrapper}
    >
      <div className={s.burgerMenu}>
        <nav>
          <button className={s.closeBtn} onClick={() => onClose()}>
            <Svg name='close-modal' className={s.crossIcon}/>
          </button>
          <ul>
            <li onClick={() => setIsLinksDisplay(v => !v)}>
              <a href="#leazing">Лизинг</a>
            </li>
            {isLinksDisplay && <>
              <li><a className={s.subLink} href="#for-personal">Для личного пользования</a></li>
              <li><a className={s.subLink} href="#for-legal">Для юридических диц</a></li>
              <li><a className={s.subLink} href="#calculator">Калькулятор</a></li>
            </>}
            <li><a className={s.n} href="#catalog">Каталог</a></li>
            <li><a className={s.n} href="#info">О нас</a></li>
          </ul>
        </nav>
        <Button
          className={s.openModalBtn}
          variant='primary'
          onClick={() => {
            onClose()
            openAppModal()
          }}
          
        >Оставить заявку</Button>

      </div>
    </ModalWrapper>
  )
}
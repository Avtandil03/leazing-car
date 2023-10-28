import { ModalWrapper } from "@/shared/ui";
import React, { FC, useState } from "react";
import s from "./modalApplication.module.scss";
import { Button, Input, Svg } from "..";
import { isPhoneValid } from "@/shared/helpers";

interface ModalApplicationProps {
  isOpen: boolean;
  onClose: () => void
}

export const ModalApplication: FC<ModalApplicationProps> = ({
  isOpen = false,
  onClose
}) => {

  function onSubmit(e:any){
    e.preventDefault()
    if(!isPhoneValid(phone) ||  !name.length) return 
    alert(JSON.stringify({name: name, phone: phone}))
  }
  

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} className={s.modalWrapper}>
      <form className={s.modal} onSubmit={onSubmit}>
        <button type='button' className={s.closeBtn} onClick={() => onClose()}>
          <Svg name="close-modal" />
        </button>
        <div className={s.modalContent}>
          <h2 className={s.title}>Онлайн-заявка</h2>
          <p className={s.description}>
            Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все
            вопросы
          </p>
          <div className={s.inputs}>
            <Input
              onChange={(val) => setPhone(val)}
              value={phone}
              label="Телефон *"
              placeholder="+7 (921) 123 45 67"
              name="phone"
              needValidation
              isValid={isPhoneValid(phone)}
              errText="Incorrect phone"
            />
            <Input 
              onChange={(val) => setName(val)} 
              value={name}
              placeholder="Имя" 
              name="name"
              needValidation
              isValid={!!name.length}
            />
          </div>
          <div className={s.sendingBlock}>
            <p className={s.agreementInfo}>
              Нажимая на кнопку «Оставить заявку», я даю согласие{" "}
              <a href="#personal-data">на обработку персональных данных</a>
            </p>
            <Button variant="primary" 
              onClick={() => {}} 
              type="submit" 
              disabled={!isPhoneValid(phone) || !name.length}
            >
              Оставить заявку
            </Button>
          </div>
          <div className={s.socials}>
            <a href="#whatsapp">
              <Svg name="whatsapp" />
            </a>
            <a href="#telegram">
              <Svg name="telegram" />
            </a>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
};

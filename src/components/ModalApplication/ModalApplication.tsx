import { ModalWrapper } from "@/shared/ui";
import React, { FC } from "react";
import s from "./modalApplication.module.scss";
import { Button, Input, Svg } from "..";

interface ModalApplicationProps {
  isOpen: boolean;
  onClose: () => void
}

export const ModalApplication: FC<ModalApplicationProps> = ({
  isOpen = false,
  onClose
}) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} className={s.modalWrapper}>
      <form className={s.modal}>
        <button className={s.closeBtn} onClick={() => onClose()}>
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
              onChange={() => {}}
              value=""
              label="Телефон *"
              placeholder="+7 (921) 123 45 67"
            />
            <Input onChange={() => {}} value="" placeholder="Имя" />
          </div>
          <div className={s.sendingBlock}>
            <p className={s.agreementInfo}>
              Нажимая на кнопку «Оставить заявку», я даю согласие{" "}
              <a href="#personal-data">на обработку персональных данных</a>
            </p>
            <Button variant="primary" onClick={() => {}}>
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

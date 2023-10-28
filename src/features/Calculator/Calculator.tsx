import { Button, ScrollInput } from "@/components";
import React, { useState } from "react";
import s from "./calculator.module.scss";

export function Calculator() {
  const [carCost, setCarCost] = useState(3000000);
  const [initialFee, setInitialFee] = useState(carCost);
  const [leazingTerm, setLeazingTerm] = useState(30);
  const [resLeazingAmount, setResLeazingAmount] = useState(4467313);
  const [monthlyPayment, setMonthlyPayment] = useState(4467313);
  return (
    <div className={s.calculator}>
      <h2 className={s.title}>Рассчитайте стоимость автомобиля в лизинг</h2>
      <div className={s.scrolls}>
        <div className={s.scroll}>
          <ScrollInput
            unit="₽"
            labelText="Стоимость автомобиля"
            min={1000000}
            max={6000000}
            value={carCost}
            onChange={(val) => setCarCost(val)}
          />
        </div>
        <div className={s.scroll}>
          <ScrollInput
            unit="₽"
            labelText="Первоначальный взнос"
            min={carCost * 0.1}
            max={carCost * 0.6}
            value={initialFee}
            onChange={(val) => setInitialFee(val)}
          />
        </div>
        <div className={s.scroll}>
          <ScrollInput
            unit="мес."
            labelText="Срок лизинга"
            min={1}
            max={60}
            value={leazingTerm}
            onChange={(val) => setLeazingTerm(val)}
          />
        </div>
      </div>
      <div className={s.results}>
        <div className={s.resBlock}>
          <p className={s.resDescription}>Сумма договора лизинга</p>
          <h3 className={s.resTitle}>{`${resLeazingAmount} ₽`}</h3>
        </div>
        <div className={s.resBlock}>
          <p className={s.resDescription}>Ежемесячный платеж от</p>
          <h3 className={s.resTitle}>{`${monthlyPayment} ₽`}</h3>
        </div>
        <Button className={s.resModalBtn} variant="primary" onClick={() => {}}>
          Оставить заявку
        </Button>
      </div>
    </div>
  );
}

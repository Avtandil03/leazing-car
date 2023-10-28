import { Button, ScrollInput } from "@/components";
import React, { useState } from "react";
import s from "./calculator.module.scss";

export function Calculator() {
  const interestRate = 10
  const [carCost, setCarCost] = useState(3000000);
  const [initialFee, setInitialFee] = useState(carCost * 0.1);
  const [leazingTerm, setLeazingTerm] = useState(30);
  const [resLeazingAmount, setResLeazingAmount] = useState(4467313);
  const [monthlyPayment, setMonthlyPayment] = useState(4467313);
  const [initInPercent, setInitInPercent] = useState(10)

  function handleSetCarCost(val: number) {
    if (val * 0.1 > initialFee) {
      setInitialFee(Math.ceil(val * 0.1));
    } else if (val * 0.6 < initialFee) {
      setInitialFee(Math.floor(val * 0.6));
    }

    setCarCost(val);
    recalculate()
  }

  function handleSetInitialFee(val: number){
    setInitialFee(val)
    recalculate()
  }

  function handleSetLeazingTerm(val: number){
    setLeazingTerm(val)
    recalculate()
  }

  function recalculate(){
    setInitInPercent(Math.round(100 / (carCost / initialFee)))
    setMonthlyPayment(Math.round(carCost - initialFee * (interestRate / (1 + interestRate)-leazingTerm-1)))
    setResLeazingAmount(Math.round(initialFee + leazingTerm * monthlyPayment ))
  }
  return (
    <div className={s.calculator}>
      <h2 className={s.title}>Рассчитайте стоимость автомобиля в лизинг</h2>
      <div className={s.scrolls}>
        <div className={s.scroll}>
          <ScrollInput
            type="number"
            unit="₽"
            labelText="Стоимость автомобиля"
            min={1000000}
            max={6000000}
            value={carCost}
            onChange={handleSetCarCost}
          />
        </div>
        <div className={s.scroll}>
          <ScrollInput
            unit={initInPercent + "%"}
            labelText="Первоначальный взнос"
            min={carCost * 0.1}
            max={carCost * 0.6}
            value={initialFee}
            onChange={handleSetInitialFee}
          />
        </div>
        <div className={s.scroll}>
          <ScrollInput
            unit="мес."
            labelText="Срок лизинга"
            min={1}
            max={60}
            value={leazingTerm}
            onChange={handleSetLeazingTerm}
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

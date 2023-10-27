import { ScrollInput } from "@/components";
import React, { useState } from "react";
import s from './calculator.module.scss'

export function Calculator() {
  const [carCost, setCarCost] = useState(3000000)
  const [initialFee, setInitialFee] = useState(carCost)
  const [leazingTerm, setLeazingTerm] = useState(carCost)
  return (
    <div className={s.calculator}>
      <h2 className={s.title}>Рассчитайте стоимость автомобиля в лизинг</h2>
      <div className={s.scrolls}>
        <ScrollInput
          labelText="Стоимость автомобиля"
          min={1000000}
          max={6000000}
          value={carCost}
          onChange={(val) => setCarCost(val)}
        />
        <ScrollInput
          labelText="Первоначальный взнос"
          min={carCost * 0.1}
          max={carCost * 0.6}
          value={initialFee}
          onChange={(val) => setInitialFee(val)}
        />
        <ScrollInput
          labelText="Срок лизинга"
          min={1}
          max={60}
          value={leazingTerm}
          onChange={(val) => setLeazingTerm(val)}
        />
      </div>
    </div>
  );
}

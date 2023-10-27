import { Header } from '@/features'
import { Calculator } from '@/features/Calculator/Calculator'
import { Slider } from '@/features/Slider/Slider'
import { FC, useState } from 'react'
import s from './homePage.module.scss'

export const HomePage: FC = () => {
  const [sliderIsOut, setSliderIsOut] = useState(false)
  return (
    <div className={s.homaPage}>
      <Header sliderIsOut={sliderIsOut}/>
      <main className={s.container}>
        <Slider setIsOut={setSliderIsOut}/>
        <Calculator/>
      </main>
    </div>
  )
}

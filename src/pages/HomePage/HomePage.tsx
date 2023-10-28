import { Header } from '@/features'
import { Calculator } from '@/features/Calculator/Calculator'
import { Slider } from '@/features/Slider/Slider'
import { FC, useState } from 'react'
import s from './homePage.module.scss'
import Link from 'next/link'
import { ModalApplication } from '@/components/ModalApplication/ModalApplication'


export const HomePage: FC = () => {
  const [sliderIsOut, setSliderIsOut] = useState(false)
  const [appModalIsOpen, setAppModalIsOpen] = useState(false)
  return (
    <div className={s.homaPage}>
      <Header openAppModal={() => setAppModalIsOpen(true)} sliderIsOut={sliderIsOut}/>
      <main className={s.container}>
        <Slider openAppModal={() => setAppModalIsOpen(true)} setIsOut={setSliderIsOut}/>
        <Calculator openAppModal={() => setAppModalIsOpen(true)} />
        <Link className={s.exampleLink} href={'/example'} >Example page {'>>>'}</Link>
      </main>
      <ModalApplication isOpen={appModalIsOpen} onClose={() => setAppModalIsOpen(false)} />
    </div>
  )
}

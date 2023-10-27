import { FC, useState } from 'react'
import s from './examplePage.module.scss'
import {Button, Input, ScrollInput, Svg } from '@/components'

export const ExamplePage: FC = () => {
  const [value, setValue] = useState(0)
  const [strVal, setStrVal] = useState('')
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  return (
    <div className={s.examplePage}>
      <div className={s.buttons}>
        <h5 className={s.title}>Кнопки</h5>
        <div className={s.btns}>
          <Button 
            onClick={() => {}}
            variant='primary'
          >Passive</Button>
          <Button 
            onClick={() => {}}
            variant='primary'
            disabled
          >Disabled</Button>
          <Button 
            onClick={() => {}}
            variant='primary'
            loading
          >Passive</Button>
        </div>
        <div className={s.btns}>
          <Button 
            onClick={() => {}}
            variant='light'
          >Passive</Button>
          <Button 
            onClick={() => {}}
            variant='light'
            disabled
          >Disabled</Button>
          <Button 
            onClick={() => {}}
            variant='light'
            loading
          >Passive</Button>
        </div>
        <div className={s.btns}>
          <Button 
            onClick={() => {}}
            variant='dark'
          >Passive</Button>
          <Button 
            onClick={() => {}}
            variant='dark'
            disabled
          >Disabled</Button>
          <Button 
            onClick={() => {}}
            variant='dark'
            loading
          >Passive</Button>
        </div>
        <div className={s.arrowBtns}>
          <Button
            onClick={() => {}}
            variant='slideBtn'
          >
            <Svg name='arrow-right' />
          </Button>
          <Button
            onClick={() => {}}
            variant='slideBtn'
            disabled
          >
            <Svg name='arrow-right' />
          </Button>
          <Button
            onClick={() => {}}
            variant='slideBtn'
            loading
          >
            <Svg name='arrow-right' />
          </Button>
        </div>
        <div className={s.arrowBtns}>
          <Button
            onClick={() => {setCount(v => v+1)}}
            variant='slideBtn'
            autoClick
            className={s.leftSmallBtn}
          >
            <Svg name='arrow-left' />
          </Button>
          <span>{count}</span>
          <span>{count1}</span>
          <Button
            onClick={() => {setCount1(v => v+1)}}
            variant='slideBtn'
            autoClick
          >
            <Svg name='arrow-right' />
          </Button>
        </div>
      </div>
      <div className={s.scrolls}>
        <h5 className={s.title}>Ползунки</h5>
        <ScrollInput
          value={value}
          onChange={val => setValue(val)}
          min={100}
          max={800}
          labelText='Тест'          
        />
        <ScrollInput
          value={value}
          onChange={val => setValue(val)}
          min={100}
          max={800}
          labelText='Тест'   
          disabled       
        />
      </div>
      <div className={s.inputs}>
        <h5 className={s.title}>Поля</h5>
        <Input
          value={strVal}
          onChange={val => setStrVal(val)}
          placeholder='Passive'
        />
        <Input
          value={strVal}
          onChange={val => setStrVal(val)}
          placeholder='Текст'
          label='Text'
        />
        <Input
          value={strVal}
          onChange={val => setStrVal(val)}
          placeholder='Текст'
          disabled
        />
        <Input
          value={strVal}
          onChange={val => setStrVal(val)}
          placeholder='Текст'
          errText='Текст ошибки'
          label='Ошибка'
          isValid={false}
          needValidation
        />
        <Input
          value={strVal}
          onChange={val => setStrVal(val)}
          placeholder='Текст'
          label='Done'
          isValid
          needValidation
        />
      </div>
    </div>
  )
}

import { FC, KeyboardEventHandler, useState, useEffect } from 'react'

import s from './scrollInput.module.scss'
import { RangeInput } from '@/shared/ui'
import cn from 'classnames'

interface ScrollInputProps {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  labelText: string
  disabled?: boolean
  unit?: string
  type?: string
}
export const ScrollInput: FC<ScrollInputProps> = ({ 
  min,
  max,
  value,
  onChange,
  labelText,
  disabled = false,
  unit = '',
  type = ''
}) => {
  const [id, _] = useState('scrollInput' + Date.now())
  const [numInputVal, setNumInputVal] = useState(value)

  useEffect(() => {
    setValue(value)
  }, [value])
  

  function setValue(value: number){
    setNumInputVal(value)
    onChange(value)
  }

  function handlNumInputChange(e: any){
    let value = e.target.value
    setNumInputVal(value)
  }

  function handleSetVal(e: any){
    let value = e.target.value

    if(value < min) value = min
    if(value > max) value = max
    setValue(Number(value))
  }

  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id} 
        className={s.numberInput}
        value={numInputVal}
        disabled={disabled}
        onChange={handlNumInputChange}
        onKeyDown={(e:any) => {
          if(e.key !== 'Enter' || !e.target)  return
          handleSetVal(e)
        }}
        onBlur={handleSetVal}
      />
      {unit && <span className={cn(s.unit, {[s.percent]: unit.includes('%')})}>{unit}</span>}
      <RangeInput 
        className={s.rangeInput}
        value={value} 
        min={min} 
        max={max}  
        disabled={disabled}
        onChange={setValue} 
      />
    </div>
  )
}
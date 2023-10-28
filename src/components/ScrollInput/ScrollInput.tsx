import { FC, KeyboardEventHandler, useState } from 'react'

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
}
export const ScrollInput: FC<ScrollInputProps> = ({ 
  min,
  max,
  value,
  onChange,
  labelText,
  disabled = false,
  unit = ''
}) => {
  const [id, _] = useState('scrollInput' + Date.now())
  const [numInputVal, setNumInputVal] = useState(value)

  function handleRangeChange(val: number){
    onChange(val)
    setNumInputVal(val)
  }

  function handleKeyDown(e:any){
    if(e.key !== 'Enter') return
    if(numInputVal < min) {
      setNumInputVal(min)
    }else if (numInputVal > max){
      setNumInputVal(max)
    }
    onChange(numInputVal)
  }

  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor={id}>{labelText}</label>
      <input 
        id={id} 
        className={s.numberInput}
        type="number" 
        value={numInputVal}
        disabled={disabled}
        onChange={e => setNumInputVal(parseInt(e.target.value))}
        onKeyDown={handleKeyDown}
      />
      {unit && <span className={cn(s.unit, {[s.percent]: unit.includes('%')})}>{unit}</span>}
      <RangeInput 
        className={s.rangeInput}
        value={value} 
        min={min} 
        max={max}  
        disabled={disabled}
        onChange={handleRangeChange} 
      />
    </div>
  )
}
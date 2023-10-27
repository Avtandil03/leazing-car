import React, { FC } from 'react'
import s from './rangeInput.module.scss'
import cn from 'classnames'

interface RangeInputProps{
  value: number
  onChange: (value:number) => void
  min: number
  max: number
  className: string
  disabled:boolean
}

export const RangeInput: FC<RangeInputProps> = ({
  value,
  onChange,
  min,
  max,
  className,
  disabled
}) => {
  return (
    <div className={cn(s.wrapper, className)}>
      <input 
        className={s.rangeInput}
        type="range"  
        disabled={disabled}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

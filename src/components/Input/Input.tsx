import { FC, useState } from 'react'

import s from './input.module.scss'
import cn from 'classnames'
import { Svg } from '../'

interface InputProps {
  value: string
  onChange: (value: string) => void
  type?: string
  name?: string
  placeholder?: string
  label?: string
  errText?: string
  isValid?: boolean
  disabled?: boolean
  needValidation?: boolean
}
export const Input: FC<InputProps> = ({ 
  value,  
  onChange,  
  type,  
  name,  
  placeholder, 
  label = '',
  errText = '',
  isValid = false,
  disabled = false,
  needValidation = false
}) => {

  const [id, _] = useState('input-' + Date.now())
  const [valDirty, setValDirty] = useState(false)
  return (
    <label 
      className={cn(s.inputWrapper, {[s.withLabel ]: label}, {[s.notValid]: valDirty && !isValid})}
    >
      <label 
        htmlFor={`${id}`}
        className={s.label}
      >{label}
      </label>
      <input
        id={`${id}`}
        type={type}
        name={name}
        value={value}
        className={s.input}
        placeholder={placeholder}
        onChange={ev => onChange(ev.target.value)}
        onBlur={() => setValDirty(needValidation)}
        disabled={disabled}
      />  
      {valDirty && 
        (isValid 
          ? <div className={s.validIconWrapper}><Svg name='check-mark'/></div>
          : <p className={s.errText}>{errText}</p>
        )
      }
    </label>
  )
}
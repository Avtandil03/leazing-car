import { FC, ReactNode } from 'react'
import cn from 'classnames'
import s from './modalWrapper.module.scss'

export interface ModalWrapperProps {
  children: ReactNode
  className?: string
  onClose: () => void
  isOpen: boolean
}

export const ModalWrapper: FC<ModalWrapperProps> = ({
  children,
  className,
  onClose,
  isOpen,
}) => {
  return (
    <div className={cn(s.modal, className, { [s.active]: isOpen })}>
      <div
        className={s.overlay}
        onClick={() => {
          onClose()
        }}
      />
      <div className={s.contentWrap}>
        <div className={s.content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  )
}

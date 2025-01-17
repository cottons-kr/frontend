import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import s from './style.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'positive' | 'negative'
  size?: 'large' | 'small'
}

export default function Button(props: ButtonProps) {
  const {
    children, className,
    variant, size,
    ...rest
  } = props

  return <>
    <button
      {...rest}
      className={cn(
        s.button,
        s[variant || 'primary'],
        s[size || 'large'],
        className
      )}
    >{children}</button>
  </>
}

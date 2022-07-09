import classNames from 'classnames'
import React, { useCallback, useContext } from 'react'
import { menuContext } from './menu'

export interface MenuItemPropsType {
  index: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const MenuItem: React.FC<MenuItemPropsType> = ({
  index,
  className,
  style,
  disabled,
  children,
}) => {
  const context = useContext(menuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  })

  const handleClick = useCallback(() => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }, [context, disabled, index])

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

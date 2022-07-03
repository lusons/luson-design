import classNames from 'classnames'
import { createContext, useCallback, useState } from 'react'
import { MenuItem, MenuItemPropsType } from './menu-item'

export type SelectCallback = (selectedIndex: number) => void

export type MenuMode = 'vertical' | 'horizontal'

export interface MenuPropsType {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
  children: React.ReactNode
}

export interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}

export const menuContext = createContext<IMenuContext>({ index: 0 })

export const Menu: React.FC<MenuPropsType> & {
  Item?: React.FC<MenuItemPropsType>
} = ({
  defaultIndex = 0,
  className,
  mode = 'horizontal',
  style,
  children,
  onSelect,
}) => {
  const [currentSelect, setSelect] = useState(defaultIndex)

  const handleClick = useCallback(
    (index: number) => {
      setSelect(index)
      if (onSelect) {
        onSelect(index)
      }
    },
    [onSelect],
  )

  const passedContext: IMenuContext = {
    index: currentSelect,
    onSelect: handleClick,
  }

  const classes = classNames('luson-menu', className, {
    'menu-vertical': mode === 'vertical',
  })

  return (
    <ul className={classes} style={style}>
      <menuContext.Provider value={passedContext}>
        {children}
      </menuContext.Provider>
    </ul>
  )
}

Menu.Item = MenuItem

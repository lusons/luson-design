import classNames from 'classnames'
import React from 'react'

export enum ButtonSize {
  Large = 'large',
  Small = 'small',
  Middle = 'middle',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonPropTypes {
  className?: string
  disabled?: boolean
  size?: 'large' | 'small' | 'middle'
  type?: ButtonType[keyof ButtonType]
  href?: string
  htmlType?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Button: React.FC<
  BaseButtonPropTypes & Omit<NativeButtonProps, 'type'> & AnchorButtonProps
> = ({
  className,
  disabled = false,
  size,
  type,
  href,
  children,
  htmlType,
  ...resetProps
}) => {
  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size !== 'middle',
    disabled: type === ButtonType.Link && disabled,
  })

  if (type === ButtonType.Link) {
    return (
      <a className={classes} href={href} {...resetProps}>
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      type={htmlType}
      {...resetProps}
    >
      {children}
    </button>
  )
}

import React, { ButtonHTMLAttributes, FC } from 'react'
import { Icon, IconName } from '../icon'
import { Tooltip } from '../tooltip'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  danger?: boolean
  icon?: IconName
  tooltip?: string
}

export const InternalButton: FC<ButtonProps> = ({
  primary,
  icon: iconName,
  tooltip,
  children,
  ...props
}) => {
  const content = (
    <button {...props}>
      {iconName && <Icon className="icon" name={iconName} />}
      {children}
    </button>
  )

  return tooltip ? (
    <Tooltip text={tooltip} placement="bottom-center" triggerOffset={10}>
      {content}
    </Tooltip>
  ) : (
    <>{content}</>
  )
}

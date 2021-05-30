import React, { Children, cloneElement, Component, FC, ReactNode } from 'react'
import { MenuItem } from './menuItem'
import { usePopoverCtx } from '../popover/context'

export interface MenuProps {}

const wrapMenuItems = (children: ReactNode, onClick: () => void) => {
  return Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child, {
        onClick: () => {
          const childClick = child.props.onClick
          childClick && childClick()
          onClick()
        },
      })
    }

    return child
  })
}

const InternalMenu: FC<MenuProps> = ({ children, ...props }) => {
  const { setOpen } = usePopoverCtx()

  const menuItems = wrapMenuItems(children, () => {
    setOpen && setOpen(false)
  })

  return <div {...props}>{menuItems}</div>
}

export class Menu extends Component<MenuProps> {
  static Item = MenuItem

  render() {
    return <InternalMenu {...this.props} />
  }
}

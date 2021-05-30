import { Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { ButtonProps, InternalButton } from './button'

export const StyledButton = styled(InternalButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 ${(p) => (p.children ? '10px' : '8px')};
  cursor: pointer;
  border-color: transparent;
  border-radius: 4px;
  font-family: ${(p) => p.theme.fonts.primary};
  font-weight: 500;
  font-size: inherit;
  position: relative;
  background: transparent;
  color: #697895;
  transition: all 200ms ease-in-out;

  .icon {
    margin-right: ${(p) => (p.children ? '8px' : '0')};
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  &:not(:disabled) {
    &::focus {
      outline: none;
    }

    &::before {
      content: '';
      position: absolute;
      pointer-events: none;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 2px solid transparent;
      border-radius: 4px;
      transition: all 200ms ease-in-out;
    }

    &:active,
    &:focus {
      &::before {
        top: -6px;
        right: -6px;
        bottom: -6px;
        left: -6px;
      }
    }

    ${(p) => resolveStyles(p, p.theme)};
  }
`

const resolveStyles = (p: ButtonProps, t: Theme) => {
  if (p.primary || p.danger) {
    let colorName = ''
    let hoverColor = p.primary ? '#362cd7' : '#e33c3c'

    if (p.primary) {
      colorName = 'primary'
    }

    if (p.danger) {
      colorName = 'danger'
    }

    //@ts-ignore
    const color: any = t.colors[colorName]
    return `
      color: white;
      background: ${color};
      box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;

      &:hover {
        background: ${hoverColor};
      }

      &:active, &:focus {
        &::before {
          border-color: ${color};
        }
      }
    `
  }

  return `
    &:hover, &:focus {
      background: ${t.colors.border};
    }

    
    &:active, &:focus {
      &::before {
        border-color: #c2cfe2;
      }
    }
  `
}

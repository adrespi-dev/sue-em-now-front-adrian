import { HTMLProps, useState, FC } from 'react'
import styled from '@emotion/styled'
import classNames from 'classnames'
import { Icon } from '../icon'
import { useTheme } from '@emotion/react'

type InputProps = HTMLProps<HTMLInputElement> & {
  password?: boolean
  onChange?: (val: string) => void
  isInvalid?: boolean
  isTouched?: boolean
  showValid?: boolean
  showClearButton?: boolean
}

const Container = styled.div`
  height: 40px;
  padding: 2px;
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.275s;
  position: relative;
  box-shadow: 0 0 0 1px transparent inset, 0 0 0 1px #e6ecf5 inset;

  &.is-dark {
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 1px #373e47 inset;

    &.active {
      box-shadow: 0 0 0 2px ${(p) => p.theme.colors.primary} inset,
        0 0 0 1px #373e47 inset;
    }

    &.invalid {
      margin-bottom: 0px;
      box-shadow: 0 0 0 2px ${(p) => p.theme.colors.danger} inset,
        0 0 0 1px #373e47 inset;
    }
  }

  input {
    border-radius: inherit;
    outline: none;
    font: inherit;
    border: 0;
    height: 100%;
    width: 100%;
    padding: 12px 14px;
    color: ${(p) => p.theme.colors.font};
    background: transparent;
  }

  .show-pass-button,
  .clear-button {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 24px;
    height: 24px;
    padding: 2px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    color: ${(p) => p.theme.colors.muted};

    &:hover {
      opacity: 0.6;
    }

    svg {
      height: 20px;
      width: 20px;
    }
  }

  &.is-password {
    .clear-button {
      right: 36px;
    }
  }

  &.active {
    box-shadow: 0 0 0 2px ${(p) => p.theme.colors.primary} inset,
      0 0 0 1px #e0e0e0 inset;
  }

  &.invalid {
    margin-bottom: 0px;
    box-shadow: 0 0 0 2px ${(p) => p.theme.colors.danger} inset,
      0 0 0 1px #e0e0e0 inset;
  }
`

export const Input: FC<InputProps> = ({
  type,
  password,
  value,
  onChange,
  showValid = false,
  showClearButton = true,
  isTouched,
  isInvalid,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const theme = useTheme()

  const className = classNames('input-control', {
    'is-password': password,
    'is-dark': theme?.isDark,
    active: isActive,
    invalid: isInvalid,
    touched: isTouched,
    valid: isTouched && !isInvalid,
  })

  const inputType = password && !showPassword ? 'password' : type

  return (
    <Container className={className}>
      <input
        {...props}
        type={inputType}
        value={value}
        onChange={onChange}
        autoComplete="off"
        onFocus={(e) => {
          setIsActive(true)
          props.onFocus && props.onFocus(e)
        }}
        onBlur={(e) => {
          setIsActive(false)
          props.onBlur && props.onBlur(e)
        }}
      />
      {showClearButton && value && (
        <div className="clear-button" onClick={() => onChange!('')}>
          <Icon name="X" />
        </div>
      )}
      {password && (
        <div
          className="show-pass-button"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? 'EyeOff' : 'Eye'} />
        </div>
      )}
    </Container>
  )
}

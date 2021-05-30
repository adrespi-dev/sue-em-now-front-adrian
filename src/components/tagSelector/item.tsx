import { FC } from 'react'
import styled from '@emotion/styled'
import classNames from 'classnames'

const MainDiv = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.colors.border};
  transition: all 0.1s ease-in;

  &:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    background: ${(p) => p.theme.colors.hover};
  }

  &.selected {
    border-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};
  }

  &.is-invalid {
    border-color: ${(p) => p.theme.colors.danger};
  }
`

type TagSelectorItemProps = {
  value?: string
  onClick?: (val: string) => void
  selected?: boolean
  isInvalid?: boolean
}

export const TagSelectorItem: FC<TagSelectorItemProps> = ({
  value,
  onClick,
  children,
  selected = false,
  isInvalid = false,
}) => {
  const className = classNames({ selected, 'is-invalid': isInvalid })
  return (
    <MainDiv
      className={className}
      onClick={() => !selected && onClick!(value!)}
    >
      {children}
    </MainDiv>
  )
}

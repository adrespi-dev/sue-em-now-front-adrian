import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Icon } from '../icon'

export interface SearchbarProps {
  placeholder: string
  value: string
  onChange: (e: string) => void
}

type StyleProps = Omit<SearchbarProps, 'onChange'> & { isFocused: boolean }

const MainDiv = styled.div<StyleProps>`
  height: 40px;
  width: ${(p) => (p.isFocused || p.value.length > 0 ? 220 : 114)}px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 10px;
  position: relative;
  transition: all 0.25s;

  &.focused {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${(p) => p.theme.colors.primary} inset,
      0 0 0 1px #e0e0e0 inset;
  }

  input {
    padding-right: ${(p) => (p.isFocused || p.value.length > 0 ? 32 : 0)}px;
  }
`

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  left: 8px;
  width: 19px;
  height: 19px;
  pointer-events: none;
  color: ${(p) => p.theme.colors.muted};
`

const ClearIcon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 7px;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: ${(p) => p.theme.colors.muted};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }
`

const Input = styled.input`
  padding-left: 38px;
  height: 100%;
  width: 100%;
  border: 0;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  background: transparent;
`

export const SearchBar: FC<SearchbarProps> = ({ onChange, ...props }) => {
  const [isFocused, setFocused] = useState(false)
  return (
    <MainDiv
      className={isFocused ? 'focused' : ''}
      isFocused={isFocused}
      {...props}
    >
      <SearchIcon name="Search" />
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {props.value && (
        <ClearIcon onClick={() => onChange('')}>
          <Icon name="X" />
        </ClearIcon>
      )}
    </MainDiv>
  )
}

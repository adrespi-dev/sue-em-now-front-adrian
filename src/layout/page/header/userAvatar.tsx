import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Icon } from '../../../components/icon'

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${(p) => p.theme.paddings.sm};
  border-radius: 8px;
  border: 1px solid transparent;
  will-change: border-color, background-color;
  transition: all 0.2s ease-in;

  &:hover {
    border-color: ${(p) => p.theme.userAvatar.hoverBorder};
    background-color: ${(p) => p.theme.colors.hover};
  }
`

const UserName = styled.div`
  font-weight: 500;
  margin-right: ${(p) => p.theme.paddings.sm};
`
const Avatar = styled.div`
  border-radius: 50%;
  background: url('https://www.cinemascomics.com/wp-content/uploads/2021/04/better-call-saul-sexta-temporada-breaking-bad-960x560.jpg.webp');
  background-size: cover;
  background-position: center;
  width: 35px;
  height: 35px;
  margin-right: ${(p) => p.theme.paddings.sm};
`

export const UserAvatar: FC = () => {
  return (
    <MainContainer>
      <Avatar />
      <UserName>Saul Goodman</UserName>
      <Icon name="ChevronDown" />
    </MainContainer>
  )
}

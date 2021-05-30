import { FC, useRef } from 'react'
import styled from '@emotion/styled'
import { CSSTransition } from 'react-transition-group'
import { Spinner } from '../../components/spinner'
import { ReactComponent as Ilustration } from '../../assets/svg/credentials-loading.svg'

const MainDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(p) => p.theme.colors.bodyBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;

  &.loading-appear {
    opacity: 0.2;

    * {
      transform: scale(0.8);
      transform-origin: center;
    }
  }

  &.loading-appear-active {
    opacity: 1;
    transition: all 100ms;

    * {
      transform: none;
      transition: all 200ms ease-in-out;
    }
  }

  &.loading-exit {
    opacity: 1;
  }

  &.loading-exit-active {
    opacity: 0;
    transition: all 300ms;
  }

  svg {
    width: 220px;
  }
`

const Message = styled.div`
  font-weight: 600;
  font-size: 1rem;
  max-width: 360px;
  margin-top: 52px;
  margin-bottom: 16px;
  text-align: center;
`

export const LoadingPanel: FC = () => {
  const nodeRef = useRef(null)

  return (
    <CSSTransition
      classNames="loading"
      nodeRef={nodeRef}
      in={true}
      timeout={200}
      appear
      unmountOnExit
    >
      <MainDiv ref={nodeRef}>
        <Ilustration />
        <Message>Estamos ingresando a tu cuenta, un momento por favor.</Message>
        <Spinner height={26} width={26} />
      </MainDiv>
    </CSSTransition>
  )
}

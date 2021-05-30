import React, { FC } from 'react'
import styled from '@emotion/styled'
import { CSSTransition } from 'react-transition-group'

type OverlayProps = {
  open: boolean
  onHide: () => void
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${(p) =>
    p.theme.isDark ? 'rgb(31 36 43 / 39%);' : 'rgba(9, 30, 66, 0.54)'};
  display: flex;
  align-items: center;
  justify-content: center;

  &.overlay-enter {
    opacity: 0;
  }

  &.overlay-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  &.overlay-exit {
    opacity: 1;
  }

  &.overlay-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`

export const ModalOverlay: FC<OverlayProps> = ({ open, onHide, children }) => {
  const nodeRef = React.useRef(null)
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={open}
      timeout={200}
      mountOnEnter
      unmountOnExit
      classNames="overlay"
    >
      <Overlay ref={nodeRef} onClick={onHide}>
        {children}
      </Overlay>
    </CSSTransition>
  )
}

import React, { FC, HTMLAttributes, useCallback } from 'react'
import styled from '@emotion/styled'
import { CSSTransition } from 'react-transition-group'
import { ModalOverlay } from './overlay'

export type ModalProps = {
  open: boolean
  maskClosable?: boolean
  onHide: () => void
  containerProps?: HTMLAttributes<HTMLDivElement>
}

const ModalContainer = styled.div`
  background: ${(p) => p.theme.colors.bodyBg};
  border-radius: 4px;
  padding: 4px 8px;
  overflow: hidden;
  border-style: solid;
  position: relative;
  border-width: ${(p) => (p.theme.isDark ? 1 : 0)}px;
  border-color: ${(p) =>
    p.theme.isDark ? p.theme.colors.border : 'transparent'};
  box-shadow: rgb(9 30 66 / 8%) 0px 0px 0px 1px, rgb(9 30 66 / 8%) 0px 2px 1px,
    rgb(9 30 66 / 31%) 0px 0px 20px -6px;

  &.modal-appear {
    transform: translateY(62px);
  }

  &.modal-appear-active {
    transform: none;
    transition: all 200ms;
  }

  &.modal-exit {
    opacity: 1;
  }

  &.modal-exit-active {
    opacity: 0;
    transition: all 200ms;
  }
`

export const Modal: FC<ModalProps> = ({
  open,
  maskClosable = true,
  onHide,
  children,
  containerProps,
}) => {
  const nodeRef = React.useRef(null)

  const handleOverlayClick = useCallback(() => {
    if (maskClosable) {
      onHide()
    }
  }, [maskClosable, onHide])

  return (
    <ModalOverlay open={open} onHide={handleOverlayClick}>
      <CSSTransition
        classNames="modal"
        nodeRef={nodeRef}
        in={open}
        timeout={200}
        appear
      >
        <ModalContainer
          onClick={(e) => e.stopPropagation()}
          ref={nodeRef}
          {...containerProps}
        >
          {children}
        </ModalContainer>
      </CSSTransition>
    </ModalOverlay>
  )
}

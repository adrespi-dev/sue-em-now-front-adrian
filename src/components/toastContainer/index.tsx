import { FC } from 'react'
import styled from '@emotion/styled'
import { Slide, ToastContainer as Wrapper } from 'react-toastify'

const StyledContainer = styled(Wrapper)`
  .Toastify__progress-bar {
    background-color: ${(p) => p.theme.colors.primary};
  }

  .Toastify__toast--default {
    background: ${(p) => p.theme.colors.bodyBg};
    color: ${(p) => p.theme.colors.font};
  }

  .Toastify__toast--success {
    background: ${(p) => p.theme.colors.bodyBg};
    color: ${(p) => p.theme.colors.font};
  }

  .Toastify__toast {
    animation-duration: 0.25s !important;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1),
      cubic-bezier(0, 0, 0.2, 1), cubic-bezier(0, 0, 0.2, 1);
  }
`

export const ToastContainer: FC = () => {
  return <StyledContainer transition={Slide} />
}

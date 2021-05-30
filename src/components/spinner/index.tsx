import { FC } from 'react'
import { keyframes } from '@emotion/react'
import { ReactComponent as Svg } from '../../assets/svg/loader.svg'
import styled from '@emotion/styled'

const spin = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled(Svg)`
  animation: 0.9s ${spin} infinite linear;
`

type PropsType = {
  height: number
  width: number
}

export const Spinner: FC<PropsType> = ({ height, width, ...props }) => (
  <Loader height={height} width={width} {...props} id="spinner" role="img" />
)

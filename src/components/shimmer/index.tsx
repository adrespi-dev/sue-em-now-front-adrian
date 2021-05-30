import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

type ShimmerProps = {
  height?: string
  width?: string
}

const ShimmerEffect = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0; 
  }
`

export const Shimmer = styled.div<ShimmerProps>`
  height: ${(p) => p.height || '100%'};
  width: ${(p) => p.width || '100%'};
  border-radius: 4px;

  background: ${(p) => (p.theme.isDark ? '#373e47' : '#f6f7f8')};

  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );

  ${(p) =>
    !p.theme.isDark
      ? ''
      : `
    background-image: linear-gradient(
      to right,
      #373e47 0%,
      #2c3138 20%,
      #373e47 40%,
      #373e47 100%
    ); 
  `}

  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${ShimmerEffect};
  animation-timing-function: linear;
`

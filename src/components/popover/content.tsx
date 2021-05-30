import { forwardRef } from 'react'
import styled from '@emotion/styled'

const MainContainer = styled.div`
  background: ${(p) => p.theme.colors.bodyBg};
  border: 1px solid ${(p) => p.theme.colors.border};
`

export const PopoverContent = forwardRef<HTMLDivElement, any>(
  ({ ...props }, ref) => <MainContainer {...props} ref={ref} />
)

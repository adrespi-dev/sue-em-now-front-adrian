import { Children, cloneElement, FC, isValidElement } from 'react'
import styled from '@emotion/styled'

const MainDiv = styled.div`
  display: flex;
  align-items: center;
`

type TagSelectorProps = {
  isInvalid?: boolean
  value?: string
  onChange?: (val: string) => void
}

export const TagSelector: FC<TagSelectorProps> = ({
  value,
  isInvalid,
  onChange,
  children,
}) => {
  return (
    <MainDiv>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          const {
            props: { value: childValue },
          } = child

          return cloneElement(child, {
            isInvalid: isInvalid,
            selected: value === childValue,
            onClick: (val: string) => {
              onChange!(val)
            },
          })
        }

        return child
      })}
    </MainDiv>
  )
}

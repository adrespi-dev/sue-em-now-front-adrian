import { cloneElement, FC, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'
import { Icon } from '../icon'

const MainDiv = styled.div`
  margin-bottom: 4px;
`

const Label = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`

const ErrorContainer = styled.div`
  height: 34px;
`

const Error = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 6px 0;
  font-size: 0.75rem;
  margin-top: 0px;
  color: ${(p) => p.theme.colors.danger};

  svg {
    height: 16px;
    width: 16px;
    margin-right: 6px;
  }

  &.error-enter {
    opacity: 0;
    transform: translateY(-6px);
  }

  &.error-enter-active {
    opacity: 1;
    transform: none;
    transition: all 300ms;
  }

  &.error-exit {
    opacity: 1;
  }

  &.error-exit-active {
    opacity: 0;
    transform: translateY(-6px);
    transition: all 300ms;
  }
`

type FormItemProps = {
  name: string
  label?: string
  rules?: RegisterOptions<any, any>
}

export const FormItem: FC<FormItemProps> = ({
  label,
  name,
  rules,
  children,
}) => {
  const nodeRef = useRef(null)
  const { t } = useTranslation()

  const {
    control,
    formState: { errors, touchedFields },
  } = useFormContext()

  const isTouched = !!touchedFields[name]

  const error = errors[name],
    hasError = !!error

  const [cachedError, setCachedError] = useState(error)
  useEffect(() => {
    if (error) {
      setCachedError(error)
    }
  }, [error, setCachedError])

  return (
    <MainDiv>
      {label && <Label>{label}</Label>}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field: { ref, ...rest } }) => {
          // @ts-ignore
          return cloneElement(children, {
            ...rest,
            showValid: !!rules,
            isTouched: isTouched,
            isInvalid: hasError,
          })
        }}
      />
      <ErrorContainer>
        <CSSTransition
          classNames="error"
          nodeRef={nodeRef}
          in={hasError}
          onExited={() => setCachedError(null)}
          timeout={300}
          appear
          unmountOnExit
        >
          <Error ref={nodeRef}>
            <Icon name="AlertCircle"></Icon>
            <div>
              {cachedError?.message ||
                t(
                  `rules.${cachedError?.type}`,
                  // @ts-ignore
                  { value: rules[cachedError?.type] }
                )}
            </div>
          </Error>
        </CSSTransition>
      </ErrorContainer>
    </MainDiv>
  )
}

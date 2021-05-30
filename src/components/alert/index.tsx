import { FC } from 'react'
import styled from '@emotion/styled'
import { Icon, IconName } from '../icon'
import classNames from 'classnames'

const MainDiv = styled.div`
  padding: 8px 8px;

  &.alert-error {
    display: flex;
    align-items: center;
    color: ${(p) => p.theme.colors.danger};
    background: #fff2f2;
    border-radius: 4px;
  }

  svg {
    margin-right: 8px;
  }
`

type AlertProps = {
  className?: string
  error?: boolean
  icon?: IconName
}

export const Alert: FC<AlertProps> = ({
  className,
  error,
  icon: iconName,
  children,
  ...props
}) => {
  const cs = classNames('alert', className, { 'alert-error': error })
  iconName = error ? 'AlertTriangle' : 'Info'

  return (
    <MainDiv className={cs}>
      <Icon name={iconName} />
      {children}
    </MainDiv>
  )
}

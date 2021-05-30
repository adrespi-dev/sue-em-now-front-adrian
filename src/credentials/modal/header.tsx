import { FC } from 'react'
import styled from '@emotion/styled'
import Bg from '../../assets/svg/space-bg.svg'
import { FlexSpacer } from '../../components/flexSpacer'
import { Icon } from '../../components/icon'
import { ReactComponent as CT } from '../../assets/svg/ct.svg'
import { ReactComponent as OJV } from '../../assets/svg/ojv.svg'
import { useTranslation } from 'react-i18next'
import { useCredentialsStore } from '../state/credentialsStore'

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 28px 24px;
  margin-left: -8px;
  margin-right: -8px;
  margin-top: -4px;
  background: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
`

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 6px;
`

const Message = styled.div`
  /* font-size: 0.75rem; */
  color: rgb(255 255 255 / 64%);
  margin-bottom: 2px;
`

const CtAndOjv = styled.div`
  display: flex;
  align-items: center;
`

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 8px;
  background: rgb(0 0 0 / 50%);

  svg {
    height: 32px;
    width: 32px;
  }
`

const Arrow = styled(Icon)`
  margin: 0 10px;
`

export const ModalHeader: FC = () => {
  const { t } = useTranslation('credentials')
  const { isUpdate } = useCredentialsStore()

  const titleKey = isUpdate ? 'titleForUpdate' : 'titleForCreate'
  return (
    <MainDiv>
      <div>
        <Title>{t(`modal.${titleKey}`)}</Title>
        <Message>{t('modal.message1')}</Message>
        <Message>{t('modal.message2')}</Message>
      </div>
      <FlexSpacer />
      <CtAndOjv>
        <LogoItem>
          <CT />
        </LogoItem>
        <Arrow name="Activity" />
        <LogoItem>
          <OJV />
        </LogoItem>
      </CtAndOjv>
    </MainDiv>
  )
}

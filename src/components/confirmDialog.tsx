import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Modal, ModalProps } from './modal'
import { Icon as IC } from './icon'
import { Button } from './button'
import { useTranslation } from 'react-i18next'

const MainDiv = styled.div`
  width: 330px;
  padding: 32px 8px;
  padding-bottom: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled(IC)`
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
  padding: 12px;
  background: #fbe9e7;
  border-radius: 50%;
  color: ${(p) => p.theme.colors.danger};
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`

const Message = styled.div`
  font-size: 1rem;
  margin-top: 12px;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 42px;

  button {
    width: 120px;
  }

  .separator {
    margin: 0 12px;
  }
`

type ConfirmProps = ModalProps & {
  title?: string
  onConfirm: () => void
}

export const Confirm: FC<ConfirmProps> = ({
  title,
  onConfirm,
  children,
  ...props
}) => {
  const { t } = useTranslation()

  return (
    <Modal {...props}>
      <MainDiv>
        <Icon name="Trash"></Icon>
        <Title>{title || t('dialog.areYouSure')}</Title>
        <Message>{children || t('dialog.message')}</Message>
        <Actions>
          <Button onClick={props.onHide}>{t('dialog.cancel')}</Button>
          <div className="separator" />
          <Button
            onClick={() => {
              onConfirm()
              props.onHide()
            }}
            danger
          >
            {t('dialog.confirm')}
          </Button>
        </Actions>
      </MainDiv>
    </Modal>
  )
}

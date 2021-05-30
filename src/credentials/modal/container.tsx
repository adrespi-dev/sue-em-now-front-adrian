import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useCredentialsStore } from '../state/credentialsStore'
import { useModal } from 'react-modal-hook'
import { Modal } from '../../components/modal'
import { ModalHeader } from './header'
import styled from '@emotion/styled'
import { ModalForm } from '../form'

const ModalBox = styled.div`
  width: 100vw;
  max-width: 640px;
`

const ModalBody = styled.div`
  padding: 38px 24px;
  padding-top: 42px;
  position: relative;
`

const Container: FC = () => {
  const store = useCredentialsStore()

  const [showModal, hideModal] = useModal(({ in: open }) => {
    return (
      <Modal open={open} onHide={store.hideModal} maskClosable={false}>
        <ModalBox>
          <ModalHeader />
          <ModalBody>
            <ModalForm />
          </ModalBody>
        </ModalBox>
      </Modal>
    )
  })

  useEffect(() => {
    if (store.showCredentialModal) {
      showModal()
    } else {
      hideModal()
    }
  }, [hideModal, showModal, store.showCredentialModal])

  return <></>
}

export const CredentialsModalContainer = observer(Container)

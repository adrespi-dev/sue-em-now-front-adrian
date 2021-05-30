import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '../../components/input'
import { FormItem } from '../../components/forms/formItem'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/button'
import { FormActions as FA } from '../../components/forms/formActions'
import { observer } from 'mobx-react-lite'
import { useCredentialsStore } from '../state/credentialsStore'
import { runInAction } from 'mobx'
import { Credential } from '../types'
import { TagSelector } from '../../components/tagSelector'
import { TagSelectorItem } from '../../components/tagSelector/item'
import { Clave } from '../../components/clave'
import { FlexSpacer } from '../../components/flexSpacer'
import { Alert } from '../../components/alert'
import { LoadingPanel } from './loading'
import { toast } from '../../toast'

const MainDiv = styled.div``

const Body = styled.div`
  max-width: 400px;
`

const FormActions = styled(FA)`
  margin-top: 32px;
  margin-right: -32px;
  margin-left: -32px;
  margin-bottom: -20px;
  padding: 0 18px;
  padding-top: 16px;
  border-top: 1px solid ${(p) => p.theme.colors.border};
`

const AlertError = styled(Alert)`
  margin-bottom: 24px;
`

export const ModalForm: FC = observer(() => {
  const { t } = useTranslation('credentials')
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState<string>()

  const {
    hideModal,
    records,
    setRecords,
    reload,
    isUpdate,
    updatingCredential,
  } = useCredentialsStore()

  const methods = useForm({
    mode: 'onTouched',
    defaultValues: updatingCredential,
  })
  const { handleSubmit } = methods

  const onSubmit = (data: Credential) => {
    console.log(isLoading)
    console.log(setIsloading)
    console.log(error)
    console.log(setError)

    setIsloading(true)
    setTimeout(() => {
      let record: any = null
      let successMessage: string
      runInAction(() => {
        if (isUpdate) {
          let updatedRecord = records.find(
            (r) => r.id === updatingCredential?.id
          )
          updatedRecord!.type = data.type
          updatedRecord!.name = data.name
          updatedRecord!.username = data.username
          successMessage = t('modal.successUpdate')
        } else {
          record = { ...data, id: Math.random().toString() }
          setRecords([...records, record])
          successMessage = t('modal.successCreate')
        }
        toast(successMessage, { type: 'success' })
        hideModal()
        reload()
      })
    }, 2000)
  }

  return (
    <FormProvider {...methods}>
      <MainDiv>
        {isLoading && <LoadingPanel />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Body>
            {error && <AlertError error>{error}</AlertError>}
            <FormItem
              label={t('type.label')}
              name="type"
              rules={{ required: true }}
            >
              <TagSelector>
                <TagSelectorItem value="CLAVE_UNICA">
                  <Clave type="CLAVE_UNICA" />
                </TagSelectorItem>
                <TagSelectorItem value="SEGUNDA_CLAVE">
                  <Clave type="SEGUNDA_CLAVE" />
                </TagSelectorItem>
              </TagSelector>
            </FormItem>
            <FormItem
              label={t('name.label')}
              name="name"
              rules={{ required: true, minLength: 3, maxLength: 30 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label={t('username.label')}
              name="username"
              rules={{
                required: true,
                pattern: {
                  value: /^(\d{2}) ?-? ?(\d) ?-? ?(\d+) ?- ?([0-9K])$/,
                  message: t('username.badFormat'),
                },
              }}
            >
              <Input placeholder={t('username.placeholder')} />
            </FormItem>
            <FormItem
              label={t('password.label')}
              name="password"
              rules={{
                required: true,
              }}
            >
              <Input password />
            </FormItem>
          </Body>
          <FormActions>
            <FlexSpacer />
            <Button type="button" onClick={hideModal}>
              {t('common:dialog.cancel')}
            </Button>
            <Button type="submit" primary>
              {t('modal.confirm')}
            </Button>
          </FormActions>
        </form>
      </MainDiv>
    </FormProvider>
  )
})

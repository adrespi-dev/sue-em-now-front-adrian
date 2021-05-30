import React, { FC } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { Button } from '../button'

type PaginatorProps = {
  page: number
  pageSize: number
  currentRecordsSize: number
  totalRecords: number
}

const MainDiv = styled.div`
  display: flex;
  align-items: center;
`

const Status = styled.div`
  margin-right: 8px;
  font-weight: 600;
`

const StyledButton = styled(Button)`
  font-weight: 500;
  height: 32px;
  width: 32px;
  padding: 0;
`

export const Paginator: FC<PaginatorProps> = ({
  page,
  pageSize,
  currentRecordsSize,
  totalRecords,
}) => {
  const { t } = useTranslation()

  const lastPage = Math.ceil(totalRecords / pageSize)
  const fromRecord = pageSize * (page - 1) + 1
  const toRecord = fromRecord + currentRecordsSize - 1

  return (
    <MainDiv>
      <Status>
        {totalRecords > 0 && (
          <>
            {fromRecord} - {toRecord} {t('of')} {totalRecords}
          </>
        )}
        {totalRecords === 0 && (
          <>
            {0} {t('records')}
          </>
        )}
      </Status>
      <StyledButton
        disabled={page === 1}
        icon="ChevronLeft"
        style={{ marginRight: 4 }}
      ></StyledButton>
      <StyledButton
        disabled={page >= lastPage}
        icon="ChevronRight"
      ></StyledButton>
    </MainDiv>
  )
}

import React, { PropsWithChildren, ReactElement } from 'react'
import styled from '@emotion/styled'
import { useTable, TableOptions, useFlexLayout } from 'react-table'
import { Shimmer } from '../shimmer'
import { useTranslation } from 'react-i18next'

const StyledTable = styled.div`
  width: 100%;
  border-collapse: collapse;

  .tr {
    button {
      height: 34px;
      width: 34px;
      padding: 4px;
    }
  }
`
const Thr = styled.div`
  padding: 0 16px;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`

const Th = styled.div<{ colAlign?: string }>`
  display: flex;
  align-items: center;
  height: 46px;
  font-weight: 600;
  padding: 8px;
  text-align: ${(p) => p.colAlign || 'left'};
`

const Tr = styled.div`
  min-height: 46px;
  padding: 0 16px;
  align-items: center;
`

const Td = styled.div<{ colAlign?: string }>`
  padding: 8px;
  text-align: ${(p) => p.colAlign || 'left'};
`

const Empty = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 228px;
`

type Props<Record extends object> = PropsWithChildren<TableProperties<Record>>

export interface TableProperties<Record extends object>
  extends TableOptions<Record> {
  isLoading?: boolean
  emptyScreen?: JSX.Element
}

export function Table<Record extends object>(
  props: Props<Record>
): ReactElement {
  const { t } = useTranslation()
  const { emptyScreen, columns, data, isLoading = false } = props

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable<Record>(
    {
      columns,
      data,
    },
    useFlexLayout
  )

  const recordsContent = (
    <>
      {!isLoading &&
        rows.map((row) => {
          prepareRow(row)
          return (
            <Tr className="tr" {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td colAlign={cell.column.align} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
    </>
  )

  const emptyContent = () => (
    <Empty>{emptyScreen || <div>{t('emptySearch')}</div>}</Empty>
  )

  const tableContent = (
    <>
      {!isLoading && (data.length ? recordsContent : emptyContent())}
      {isLoading &&
        [1, 2, 3, 4, 5, 6].map((i) => (
          <Tr style={{ display: 'flex' }} key={i}>
            {headerGroups[0].headers.map((column) => (
              <Td {...column.getHeaderProps()}>
                <Shimmer height="24px" width="80%"></Shimmer>
              </Td>
            ))}
          </Tr>
        ))}
    </>
  )

  return (
    <StyledTable {...getTableProps()}>
      <div>
        {headerGroups.map((headerGroup) => (
          <Thr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th colAlign={column.align} {...column.getHeaderProps()}>
                {column.render('Header')}
              </Th>
            ))}
          </Thr>
        ))}
      </div>
      <div {...getTableBodyProps()}>{tableContent}</div>
    </StyledTable>
  )
}

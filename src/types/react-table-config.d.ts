import { UseTableColumnOptions } from 'react-table'

declare module 'react-table' {
  export interface ColumnInterface<D extends object = {}>
    extends UseTableColumnOptions<D> {
    align?: 'left' | 'right' | 'center'
    Cell?: (props: { row: Row<D> }) => JSX.Element
  }
}

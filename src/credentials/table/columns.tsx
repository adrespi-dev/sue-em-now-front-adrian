import { useModal } from 'react-modal-hook'
import { Column } from 'react-table'
import { Button } from '../../components/button'
import { Clave } from '../../components/clave'
import { Confirm } from '../../components/confirmDialog'
import { useCredentialsStore } from '../state/credentialsStore'
import { Credential } from '../types'

export const useColumns = (
  t: (key: string) => string
): Column<Credential>[] => [
  {
    id: 'type',
    Header: t('columns.type'),
    Cell: ({ row }) => {
      return <Clave type={row.original.type} />
    },
  },
  {
    Header: t('columns.name'),
    accessor: 'name',
  },
  {
    Header: t('columns.username'),
    accessor: 'username',
  },
  {
    Header: t('columns.status'),
    accessor: 'status',
  },
  {
    id: 'options',
    width: 90,
    Header: () => null,
    Cell: ({ row }) => {
      const {
        showModal: showCredentialModal,
        deleteCredential,
      } = useCredentialsStore()

      const [
        showDeleteConfirm,
        hideDeleteConfirm,
      ] = useModal(({ in: open }) => (
        <Confirm
          open={open}
          onHide={hideDeleteConfirm}
          onConfirm={() => deleteCredential(row.original.id)}
        ></Confirm>
      ))

      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            style={{ marginRight: 8 }}
            icon="Edit2"
            onClick={() => showCredentialModal(row.original)}
          />
          <Button icon="Trash" onClick={showDeleteConfirm} />
        </div>
      )
    },
  },
]

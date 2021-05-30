export interface Credential {
  id: string
  type: 'CLAVE_UNICA' | 'SEGUNDA_CLAVE'
  name: string
  username: string
  status: string
}

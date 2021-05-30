import { FC } from 'react'
import styled from '@emotion/styled'
import { ReactComponent as ClaveUnica } from '../../assets/svg/claveunica.svg'
import { ReactComponent as ClavePJ } from '../../assets/svg/clavepoderjudicial.svg'
import { useTranslation } from 'react-i18next'

type ClaveProps = {
  type: 'CLAVE_UNICA' | 'SEGUNDA_CLAVE'
  className?: string
}

const InternalClave: FC<ClaveProps> = ({ className, type }) => {
  const { t } = useTranslation()

  let text: any
  let icon: any
  switch (type) {
    case 'CLAVE_UNICA':
      text = 'Clave Única'
      icon = (
        <div className="clave-unica">
          <ClaveUnica className="icon" width={24} />
        </div>
      )
      break

    case 'SEGUNDA_CLAVE':
      text = 'Clave Poder Judicial'
      icon = <ClavePJ className="icon" width={24} />
      break

    default:
      text = t('badPassType')
      break
  }

  return (
    <div className={className}>
      <div className="icon-wrapper">{icon}</div>
      <div>{text}</div>
    </div>
  )
}

export const Clave = styled(InternalClave)`
  display: flex;
  align-items: center;

  .icon-wrapper {
    width: 34px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    margin-right: 12px;
  }

  .clave-unica {
    display: flex;
  }
`

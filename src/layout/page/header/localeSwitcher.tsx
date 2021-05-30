import { FC } from 'react'
import styled from '@emotion/styled'
import { HeaderButton } from './button'
import { Popover } from '../../../components/popover'
import { Menu } from '../../../components/menu/menu'
import { FlexSpacer } from '../../../components/flexSpacer'
import { useTranslation } from 'react-i18next'
import { ReactComponent as ClSvg } from '../../../assets/svg/cl.svg'
import { ReactComponent as UsSvg } from '../../../assets/svg/us.svg'

const StyledHeaderButton = styled(HeaderButton)``

const StyledMenu = styled(Menu)`
  width: 120px;
`

const ClFlag = styled(ClSvg)`
  height: 24px;
`

const UsFlag = styled(UsSvg)`
  height: 24px;
`

export const PopoverMenu: FC<any> = ({ ...props }) => {
  const { i18n } = useTranslation()
  const country = i18n.language.split('-')[0]

  return (
    <StyledMenu {...props}>
      <Menu.Item
        onClick={() => i18n.changeLanguage('es')}
        selected={country === 'es'}
      >
        <div>Español</div>
        <FlexSpacer />
        <ClFlag />
      </Menu.Item>
      <Menu.Item
        onClick={() => i18n.changeLanguage('en')}
        selected={country === 'en'}
      >
        <div>English</div>
        <FlexSpacer />
        <UsFlag />
      </Menu.Item>
    </StyledMenu>
  )
}

export const LocaleSwitcher: FC = ({ ...props }) => {
  const { i18n } = useTranslation()
  const country = i18n.language.split('-')[0]
  const currentFlag = country === 'es' ? <ClFlag /> : <UsFlag />

  return (
    <Popover content={() => <PopoverMenu />}>
      <StyledHeaderButton {...props}>{currentFlag}</StyledHeaderButton>
    </Popover>
  )
}

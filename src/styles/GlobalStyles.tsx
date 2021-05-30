/** @jsxImportSource @emotion/react */
import { FC, Fragment } from 'react'
import { css, Global } from '@emotion/react'

const GlobalStyles: FC = ({ children }) => (
  <Fragment>
    <Global
      styles={({ colors, fonts }) =>
        css({
          'html, body': {
            margin: 0,
          },
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            color: colors.font,
            borderColor: colors.border,
            fontSize: fonts.size,
            fontFamily: fonts.primary,
          },
          input: {
            color: 'inherit',
          },
        })
      }
    ></Global>
    {children}
  </Fragment>
)

export default GlobalStyles

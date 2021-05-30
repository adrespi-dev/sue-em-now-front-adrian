import React from 'react'
import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import CredentialsPage from '../credentials'
import DocsPage from '../docs'

const PageRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={`/docs`} component={DocsPage} />
      <Route path={`/credentials`} component={CredentialsPage} />
      <Redirect to={`/credentials`} />
    </Switch>
  )
}

export default PageRouter

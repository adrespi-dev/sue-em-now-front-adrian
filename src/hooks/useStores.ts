import React from 'react'
import { RootContext } from '../state/stores/rootStore'

export const useStores = () => React.useContext(RootContext)

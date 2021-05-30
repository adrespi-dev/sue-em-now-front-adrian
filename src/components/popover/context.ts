import { createContext, useContext } from 'react'

export type PopoverContextProps = {
  isOpen?: boolean
  setOpen?: (isOpen: boolean) => void
}

export const PopoverContext = createContext<PopoverContextProps>({})
export const usePopoverCtx = () =>
  useContext<PopoverContextProps>(PopoverContext)

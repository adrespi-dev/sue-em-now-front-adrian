import React, { cloneElement, FC, useState } from 'react'
import styled from '@emotion/styled'
import { PopoverContent } from './content'
import { PopoverContext } from './context'
import { Arrow, useLayer } from 'react-laag'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '@emotion/react'

type PopoverProps = {
  className?: string
  content: () => JSX.Element
}

const ContentWrapper = motion(PopoverContent)

const InternalPopover: FC<PopoverProps> = ({
  className,
  content,
  children,
}) => {
  const theme = useTheme()
  const [isOpen, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    auto: true,
    placement: 'bottom-center',
    onOutsideClick: close,
    onDisappear: close,
    triggerOffset: 8,
  })

  // @ts-ignore
  const childWrapped = cloneElement(children, {
    ...triggerProps,
    onClick: () => setOpen(!isOpen),
  })

  return (
    <PopoverContext.Provider value={{ isOpen, setOpen }}>
      {childWrapped}
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <ContentWrapper
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{
                type: 'spring',
                stiffness: 800,
                damping: 35,
              }}
              className={className}
              {...layerProps}
            >
              {content()}
              <Arrow
                borderWidth={1}
                borderColor={theme.colors.border}
                backgroundColor={theme.colors.bodyBg}
                {...arrowProps}
              />
            </ContentWrapper>
          )}
        </AnimatePresence>
      )}
      {/* <TinyPopover
        onClickOutside={() => setOpen(false)}
        isOpen={isOpen}
        containerClassName={className}
        reposition={false}
        content={(popoverState) => (
          <PopoverContent>{content(popoverState)}</PopoverContent>
        )}
        {...props}
      >
        {childWrapped}
      </TinyPopover> */}
    </PopoverContext.Provider>
  )
}

export const Popover = styled(InternalPopover)``

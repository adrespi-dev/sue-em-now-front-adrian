import React, { FC } from 'react'
import { useLayer, useHover, Arrow, Placement } from 'react-laag'
import { motion, AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'

export type TooltipProps = {
  text: string
  triggerOffset?: number
  placement?: Placement
  visible?: boolean
}

const MainDiv = styled(motion.div)`
  padding: 8px 12px;
  color: white;
  background: #3f4857;
  font-weight: 600;
  box-shadow: 0px 10px 20px 0px rgb(0 0 0 / 30%);
  font-size: 0.75rem;
  border-radius: 4px;
`

export const Tooltip: FC<TooltipProps> = ({
  visible = true,
  text,
  placement,
  triggerOffset,
  children,
}) => {
  const [isOver, hoverProps] = useHover({ delayEnter: 250, delayLeave: 200 })

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    placement: placement,
    triggerOffset: triggerOffset,
  })

  let trigger
  if (isReactText(children)) {
    trigger = (
      <span {...triggerProps} {...hoverProps}>
        {children}
      </span>
    )
  } else {
    //@ts-ignore
    trigger = React.cloneElement(children, {
      ...triggerProps,
      ...hoverProps,
    })
  }

  return (
    <>
      {trigger}
      {renderLayer(
        <AnimatePresence>
          {visible && isOver && (
            <MainDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              {text}
              <Arrow
                {...arrowProps}
                backgroundColor="#3f4857"
                borderColor="#3f4857"
                borderWidth={1}
                size={6}
              />
            </MainDiv>
          )}
        </AnimatePresence>
      )}
    </>
  )
}

function isReactText(children: any) {
  return ['string', 'number'].includes(typeof children)
}

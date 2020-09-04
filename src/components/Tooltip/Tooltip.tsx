import React, { Fragment, useState, RefObject, useRef } from 'react'
import styled from 'styled-components'
import { Portal } from '../Portal'
import { Popover, Coords } from './Popover'

export interface TooltipProps {
  title?: string | React.ReactNode
  content?: string | React.ReactNode
  children: string | React.ReactNode
}

interface _TitleProps {
  visible: boolean
}

interface _ContentProps {
  visible: boolean
}

const _Title = styled.div<_TitleProps>``

const _Content = styled.div<_ContentProps>``

const _Children = styled.div`
  display: inline-block;
  border: 1px solid yellow;
`

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  content
}) => {
  const [active, setActive] = useState(false)
  const [coords, setCoords] = useState<Coords>({ left: 0, top: 0 })
  const childRef = useRef<HTMLDivElement>(null)

  const updateTooltipCoords = (child: HTMLDivElement) => {
    const rect = child.getBoundingClientRect()

    setCoords({
      left: rect.x + rect.width / 2, // add half the width of the button for centering
      top: rect.y + window.scrollY // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    })
  }

  return (
    <Fragment>
      <_Children
        ref={childRef}
        onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
          updateTooltipCoords(event.target as HTMLDivElement)
          setActive(true)
        }}
        onMouseLeave={(event: React.MouseEvent<HTMLDivElement>) => {
          updateTooltipCoords(event.target as HTMLDivElement)
          setActive(false)
        }}
      >
        {children}
      </_Children>
      <Portal>
        <Popover
          active={active}
          coords={coords}
          // updateTooltipCoords={() => {
          //   if (childRef && childRef.current)
          //     updateTooltipCoords(childRef.current)
          // }}
        >
          <_Title visible={!!title}>{title}</_Title>
          <_Content visible={!!content}>{content}</_Content>
        </Popover>
      </Portal>
    </Fragment>
  )
}

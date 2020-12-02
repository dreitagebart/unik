import React, { Children, useState } from 'react'

import { _TabTitle, _Tabs, _TabContent, _TabHeader } from './Styled'
import { TabProps, Tab } from './Tab'

export interface TabsProps {
  activeTab?: string
  onSelect?: (activeTab: string) => void
  children: any
}

interface SubComponents {
  Tab: React.FC<TabProps>
}

export const Tabs: React.FC<TabsProps> & SubComponents = ({
  onSelect,
  children,
  activeTab
}) => {
  const [active, setActive] = useState(
    activeTab ? activeTab : children[0].props.tabKey
  )

  const handleClick = (tabKey: string) => {
    if (onSelect) {
      onSelect(tabKey)
    }

    setActive(tabKey)
  }

  return (
    <_Tabs>
      <_TabHeader>
        {Children.map(children, (child) => {
          return (
            <_TabTitle
              key={child.props.tabKey}
              active={active === child.props.tabKey}
              onClick={() => {
                handleClick(child.props.tabKey)
              }}
            >
              {child.props.title}
            </_TabTitle>
          )
        })}
      </_TabHeader>
      <_TabContent>
        {children
          .filter((child: any) => child.props.tabKey === active)
          .map((child: any) => {
            return child.props.children
          })}
      </_TabContent>
    </_Tabs>
  )
}

Tabs.Tab = Tab

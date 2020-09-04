import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Text, TextProps } from './Text'
import { Unik } from '../Unik'

export default {
  title: 'Components/Text',
  component: Text
} as Meta

const Template: Story<TextProps> = (args) => (
  <Unik>
    <Text {...args}></Text>
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  bold: false,
  light: false,
  uppercase: false,
  size: 15,
  children: (
    <>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. <Text bold>Stet</Text> clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.{' '}
        <Text uppercase light size="2em">
          Lorem ipsum dolor sit amet,
        </Text>
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <p>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
        dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.{' '}
      </p>
      <p>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
        vel eum iriure dolor in hendrerit in vulputate velit esse molestie
        consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
        accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
        delenit augue duis dolore te feugait nulla facilisi.{' '}
      </p>
      <p>
        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
        doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit
        amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
        minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
        nisl ut aliquip ex ea commodo consequat.{' '}
      </p>
      <p>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis.
      </p>
    </>
  )
}

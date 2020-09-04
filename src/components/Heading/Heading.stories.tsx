import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Heading, HeadingProps } from './Heading'
import { Unik } from '../Unik'
import { Icon } from '../Icon'

export default {
  title: 'Components/Heading',
  component: Heading
} as Meta

const Template: Story<HeadingProps> = (args) => (
  <Unik>
    <Heading {...args} />
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.
    </p>
    <p>
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
      eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
      zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
      dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </p>
    <p>
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
      suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
      eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
      vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
      iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
      duis dolore te feugait nulla facilisi.
    </p>
    <p>
      Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
      doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit
      amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
      tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
      minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
      nisl ut aliquip ex ea commodo consequat.
    </p>
    <p>
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis.
    </p>
    <p>
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
      ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero
    </p>
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  level: 'four',
  icon: <Icon size={24} type="solid" name="flag-checkered"></Icon>,
  children: 'I am an amazing Header'
}

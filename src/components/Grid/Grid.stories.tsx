import React, { Fragment } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Grid, GridProps } from './Grid'
import { Box } from '../Box'
import { Unik } from '../Unik'

export default {
  title: 'Components/Grid',
  component: Grid
} as Meta

const Template: Story<GridProps> = (args) => (
  <Unik>
    <Grid {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <Fragment>
      <Grid.Row>
        <Grid.Cell size={2}>
          <Box
            width="100%"
            align="center"
            justify="center"
            border="1px solid red"
          >
            1
          </Box>
        </Grid.Cell>
        <Grid.Cell size={6}>
          <Box
            width="100%"
            height={150}
            align="center"
            justify="center"
            border="1px solid blue"
          >
            2
          </Box>
        </Grid.Cell>
        <Grid.Cell size={4}>
          <Box
            width="100%"
            height={150}
            align="center"
            justify="center"
            border="1px solid green"
          >
            3
          </Box>
        </Grid.Cell>
      </Grid.Row>
      <Grid.Row columns={6}>
        <Grid.Cell size={2}></Grid.Cell>
        <Grid.Cell size={2}></Grid.Cell>
        <Grid.Cell size={2}></Grid.Cell>
      </Grid.Row>
    </Fragment>
  )
}

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import { Box } from '../../Box'
import { Button } from '..'
import README from '../README.md'

const Colored = props => (
  <Grommet theme={theme}>
    <Box align="center" pad="large" gap="small">
      <Button primary title="Submit" onClick={() => {}} />
      <Button primary color="dark-1" title="custom theme text colored" onClick={() => {}} />
      <Button primary color="dark-1" title="dark-1" onClick={() => {}} {...props} />
      <Button primary color="#111111" title="#111111" onClick={() => {}} {...props} />
      <Button primary color="#777" title="#777" onClick={() => {}} {...props} />
      <Button plain color="red" title="plain red" onClick={() => {}} {...props} />
      <Button plain title="plain inherit" onClick={() => {}} {...props} />
    </Box>
  </Grommet>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Colored', () => <Colored />)

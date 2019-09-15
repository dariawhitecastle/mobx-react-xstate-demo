import React from 'react'
import { storiesOf } from '@storybook/react'

import Menu from '../Menu'

storiesOf('Menu', module).add('Default', () => (
  <Menu
    label="Menu"
    items={[
      { label: 'First Action', onClick: () => {} },
      { label: 'Second Action', onClick: () => {} },
    ]}
  />
))

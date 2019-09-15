import { addDecorator, configure } from '@storybook/react'
import { addReadme } from 'storybook-readme'

addDecorator(addReadme)

// automatically import all files ending in *.stories.js
const req = require.context('../app/components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

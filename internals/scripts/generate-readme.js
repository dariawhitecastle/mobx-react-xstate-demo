import del from 'del'
import fs from 'fs'
import path from 'path'

const code = '```'
const warning = '<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->\n'

const replaceHoc = content => content.replace(/(With.*\()(.*)(\))/g, '$2')

const toMarkdown = theme => {
  const themeProps = Object.keys(theme).map(
    themeEntry => `
**${themeEntry}**

${theme[themeEntry].description} Expects \`${theme[themeEntry].type}\`.

Defaults to

${code}
${theme[themeEntry].defaultValue}
${code}
`,
  )
  return `## Theme
  ${themeProps.join('')}`
}

const components = folder =>
  fs
    .readdirSync(folder)
    .filter(
      file =>
        fs.statSync(path.join(folder, file)).isDirectory() &&
        fs.existsSync(path.join(folder, file, `${file}.doc.js`)),
    )

const FOLDER = path.resolve('app/components')

components(FOLDER).forEach(component => {
  /* eslint-disable */
  const { doc, themeDoc } = require(path.join(FOLDER, component, `${component}.doc.js`))
  const componentModule = require(path.join(FOLDER, component, 'index.js'))
  // we use the second array element since the first is '__esModule'.
  const Component = componentModule[Object.keys(componentModule).filter(k => k === component)[0]]
  /* eslint-enable */

  const readmeDestination = path.join(FOLDER, component, 'README.md')

  const DocumentedComponent = doc(Component)

  const readmeContent = themeDoc
    ? `${warning}${replaceHoc(DocumentedComponent.toMarkdown())}\n${toMarkdown(themeDoc)}`
    : `${warning}${replaceHoc(DocumentedComponent.toMarkdown())}`
  del(readmeDestination).then(() => fs.writeFileSync(readmeDestination, readmeContent))
})

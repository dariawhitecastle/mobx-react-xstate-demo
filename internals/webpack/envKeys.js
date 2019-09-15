/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs') // to check if the file exists

module.exports = () => {
  // get the root path
  const currentPath = path.join(__dirname, '../../')

  // Create the fallback path (the production .env)
  const basePath = `${currentPath}.env`

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = `${basePath}.${process.env.NODE_ENV}`

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath
  const envExists = fs.existsSync(finalPath)

  if (!envExists) {
    /* eslint-disable-next-line no-console */
    console.warn(`⚠️  No ENV file found for environment - ${process.env.NODE_ENV}`)
  }

  // Set the path parameter in the dotenv config
  let fileEnv = dotenv.config({ path: finalPath }).parsed
  fileEnv = {
    ...fileEnv,
    ...process.env,
  }

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    const prevVal = prev
    prevVal[`process.env.${next}`] = JSON.stringify(fileEnv[next])
    return prevVal
  }, {})

  return envKeys
}

import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import { fontFamily } from './utils/theme'

import bryantProWoff2 from './fonts/BryantPro-Regular.woff2'
import bryantProWoff from './fonts/BryantPro-Regular.woff'
import bryantProTruetype from './fonts/BryantPro-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Bryant Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Bryant Pro'), local('BryantPro'),
        url(${bryantProWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${bryantProWoff}) format('woff'), /* Modern Browsers */
        url(${bryantProTruetype}) format('truetype'); /* Safari, Android, iOS */
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
   font-family: '${fontFamily}', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .slide-enter {
    transform: translate(100%);
  }
  .slide-enter.slide-enter-active {
    transform: translate(0%);
    transition: transform 400ms ease-in-out;
  }
  .slide-leave {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    transform: translate(0%);
  }
  .slide-leave.slide-leave-active {
    transform: translate(-100%);
    transition: transform 400ms ease-in-out;
  }

  .slide-back-enter {
    transform: translate(-100%);
  }
  .slide-back-enter.slide-back-enter-active {
    transform: translate(0%);
    transition: transform 400ms ease-in-out;
  }
  .slide-back-leave {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    transform: translate(0%);
  }
  .slide-back-leave.slide-back-leave-active {
    transform: translate(100%);
    transition: transform 400ms ease-in-out;
  }
`

export default GlobalStyle

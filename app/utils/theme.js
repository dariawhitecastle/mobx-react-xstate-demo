import colors from './colors'
const fontFamily = 'Bryant Pro'

const theme = {
  global: {
    font: {
      family: `${fontFamily}, 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      color: colors.primaryText /** @todo: this doesn't work */,
    },
    colors: {
      brand: colors.primary,
      focus: colors.primary50,
      'status-ok': colors.success,
      'status-error': colors.error,
    },
  },
  formField: {
    label: {
      size: 'small',
      weight: 600,
      color: '#2c3644',
      margin: { vertical: '0', bottom: '5px', horizontal: '0' },
    },
    background: '#ffffff',
    margin: { vertical: '0', bottom: '18px', horizontal: '0' },
  },
  radioButton: {
    extend: {
      minHeight: 24,
      minWidth: 24,
    },
  },
  table: {
    body: {
      pad: 'xsmall',
      font: {
        weight: 'normal',
        color: colors.primaryText,
      },
    },
    header: {
      align: 'center',
      fill: 'horizontal',
      pad: 'xsmall',
      verticalAlign: 'bottom',
      background: {
        color: colors.secondary10,
      },
    },
  },
  button: {
    border: {
      radius: '4px',
    },
    padding: {
      vertical: '13px',
    },
  },
  meter: {
    color: colors.primary10,
  },
}

export default theme
export { fontFamily }

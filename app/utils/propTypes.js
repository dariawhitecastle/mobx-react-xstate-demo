import { PropTypes } from 'react-desc'

export const a11yTitlePropType = PropTypes.string.description(
  'Custom title to be used by screen readers.',
)

export const backgroundPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    color: PropTypes.string,
    opacity: PropTypes.oneOfType([PropTypes.oneOf(['weak', 'medium', 'strong']), PropTypes.bool]),
  }),
]).description('Background color')

export const colorPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({ dark: PropTypes.string, light: PropTypes.string }),
])

const MARGIN_SIZES = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge']

export const genericProps = {
  a11yTitle: a11yTitlePropType,
  alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch'])
    .description(`How to align along the cross axis when contained in
      a Box or along the column axis when contained in a Grid.`),
  gridArea: PropTypes.string.description(`The name of the area to place
    this inside a parent Grid.`),
  margin: PropTypes.oneOfType([
    PropTypes.oneOf(['none', ...MARGIN_SIZES]),
    PropTypes.shape({
      bottom: PropTypes.oneOfType([PropTypes.oneOf(MARGIN_SIZES), PropTypes.string]),
      horizontal: PropTypes.oneOfType([PropTypes.oneOf(MARGIN_SIZES), PropTypes.string]),
      left: PropTypes.oneOfType([PropTypes.oneOf(MARGIN_SIZES), PropTypes.string]),
      right: PropTypes.oneOfType([PropTypes.oneOf(MARGIN_SIZES), PropTypes.string]),
      top: PropTypes.oneOfType([PropTypes.oneOf(MARGIN_SIZES), PropTypes.string]),
      vertical: PropTypes.oneOfType([PropTypes.oneOf(MARGIN_SIZES), PropTypes.string]),
    }),
    PropTypes.string,
  ]).description(`The amount of margin around the component. An object can
      be specified to distinguish horizontal margin, vertical margin, and
      margin on a particular side.`),
}

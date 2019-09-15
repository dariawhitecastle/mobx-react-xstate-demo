const BUTTON_MAX_WIDTH = 600

const FORM_GRID_AREAS = {
  xsmall: [
    { name: 'header', start: [0, 0], end: [4, 0] },
    { name: 'form', start: [0, 1], end: [4, 1] },
  ],
  small: [
    { name: 'header', start: [0, 0], end: [4, 0] },
    { name: 'form', start: [0, 1], end: [4, 1] },
  ],
  medium: [
    { name: 'header', start: [1, 0], end: [3, 0] },
    { name: 'form', start: [1, 1], end: [3, 1] },
  ],
  large: [
    { name: 'header', start: [1, 0], end: [3, 0] },
    { name: 'form', start: [1, 1], end: [3, 1] },
  ],
}
const FORM_GRID_COLUMNS = ['20%', '20%', '20%', '20%', '20%']
const FORM_GRID_ROWS = ['auto', 'auto']

export { BUTTON_MAX_WIDTH, FORM_GRID_AREAS, FORM_GRID_COLUMNS, FORM_GRID_ROWS }

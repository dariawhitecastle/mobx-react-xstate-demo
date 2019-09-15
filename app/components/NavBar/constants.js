const NAV_HEIGHT = '80px'

const FORM_GRID_AREAS = {
  xsmall: [
    { name: 'logo', start: [0, 0], end: [3, 0] },
    { name: 'toggle', start: [8, 0], end: [9, 0] },
  ],
  small: [
    { name: 'logo', start: [0, 0], end: [3, 0] },
    { name: 'toggle', start: [9, 0], end: [9, 0] },
  ],
  medium: [
    { name: 'logo', start: [0, 0], end: [3, 0] },
    { name: 'toggle', start: [9, 0], end: [9, 0] },
  ],
  large: [
    { name: 'logo', start: [0, 0], end: [1, 0] },
    { name: 'center', start: [1, 0], end: [5, 0] },
    { name: 'right', start: [7, 0], end: [9, 0] },
  ],
}
const FORM_GRID_COLUMNS = ['10%', '10%', '10%', '10%', '10%', '10%', '10%', '10%', '10%', '10%']
const FORM_GRID_ROWS = [NAV_HEIGHT, 'max-content', 'max-content', 'max-content']

export { NAV_HEIGHT, FORM_GRID_AREAS, FORM_GRID_COLUMNS, FORM_GRID_ROWS }

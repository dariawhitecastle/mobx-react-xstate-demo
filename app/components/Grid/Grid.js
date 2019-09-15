/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/**
 * Grid
 */

import React, { useContext } from 'react'
import { Grid } from 'grommet'
import { ResponsiveContext } from 'grommet/es6/contexts'
import { isPlainObject } from 'lodash'

import { doc } from './Grid.doc'
import helpers from '../../utils/helpers'

const createGrid = ({
  a11yTitle,
  align,
  alignContent,
  alignSelf,
  areas,
  as,
  columns,
  fill,
  gap,
  gridArea,
  justify,
  justifyContent,
  margin,
  rows,
  tag,
  ...rest
}) => {
  const size = useContext(ResponsiveContext)

  return (
    <Grid
      a11yTitle={a11yTitle}
      align={align}
      alignContent={alignContent}
      alignSelf={alignSelf}
      areas={isPlainObject(areas) ? areas[size] : areas}
      as={as}
      columns={columns}
      fill={fill}
      gap={gap}
      gridArea={gridArea}
      justify={justify}
      justifyContent={justifyContent}
      margin={margin}
      rows={rows}
      tag={tag}
      {...rest}
    />
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createGrid,
})

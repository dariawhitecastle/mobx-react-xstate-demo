import React from 'react'
import PropTypes from 'prop-types'

import Ul from './Ul'
import Wrapper from './Wrapper'

function List({ component, items, ...rest }) {
  const ComponentToRender = component
  let content = <div />

  // If we have items, render them
  if (items) {
    content = items.map(item => <ComponentToRender key={`item-${item.id}`} item={item} />)
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />
  }

  return (
    <Wrapper {...rest}>
      <Ul>{content}</Ul>
    </Wrapper>
  )
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
}

export default List

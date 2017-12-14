import React from 'react';

const buildText = (props) => {
  let item

  if (props.isEditing) {
    return <input
      onChange={(e) => props.onUpdate(e, props.id)}
      type="text"
      value={ props.name }
    />
  }

  return <a
    href='#'
    onClick={(e) => props.onListChange(e, props.id)}
  >
    { props.name }
  </a>
}

export default (props) => {
  const text = buildText(props)
  return (<li>
    { text }
    <button
      onClick={() => props.onDelete(props.id)}
    >Delete</button>
  </li>)
}


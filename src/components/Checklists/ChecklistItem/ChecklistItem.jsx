import React from 'react';

const buildText = (props) => {
  if (props.lists.updatable === props.id) {
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

const buildEditButton = (props) => {
  if (props.lists.updatable === props.id) {
    return <button
      onClick={() => props.onUpdatable(null)}
    >Save</button>
  }

  return <button
    onClick={() => props.onUpdatable(props.id)}
  >Edit</button>
}

export default (props) => {
  const text = buildText(props)
  const editButton = buildEditButton(props)

  return (<li>
    { text }
    { editButton }
    <button
      onClick={() => props.onDelete(props.id)}
    >Delete</button>
  </li>)
}


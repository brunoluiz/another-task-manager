import React from 'react';

const textComponent = (props) => (props.isUpdatable)
   ? <input
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      type="text"
      value={ props.children }
    />
  : <a
      href='#'
      onClick={props.onTextClick}
    >{ props.children }</a>

const buttonComponent = (props) => (props.isUpdatable)
  ? <button
      onClick={props.onSaveClick}
    >Save</button>
  : <button
      onClick={props.onEditClick}
    >Edit</button>

export default (props) =>
  <span>
    { textComponent(props) }
    { buttonComponent(props) }
  </span>

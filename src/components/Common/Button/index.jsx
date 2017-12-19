import React from 'react';
import style from './style.module.css'

export default (props) => {
  let className = `${style.button} ${props.className}`

  if (props.borderless)
    className += ` ${style.borderless}`

  return (
    <button
      className={className}
      onClick={props.onClick}
    >{props.children}</button>
  )
}

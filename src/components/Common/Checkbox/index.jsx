import React from 'react';
import style from './style.module.css'

export default (props) => (
  <input
    type='checkbox'
    checked={props.checked}
    className={`${style.checkbox} ${props.className}`}
    onChange={props.onChange}
    onClick={props.onClick}
    value={props.value}
  />
)



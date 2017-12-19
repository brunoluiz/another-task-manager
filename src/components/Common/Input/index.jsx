import React from 'react';
import style from './style.module.css'

export default (props) => (
  <input
    type='text'
    className={`${style.input} ${props.className}`}
    onKeyPress={props.onKeyPress}
    onChange={props.onChange}
    onClick={props.onClick}
    value={props.value}
  />
)


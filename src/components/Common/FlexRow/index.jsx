import React from 'react';

import style from './style.module.css'

export default (props) => (
  <div className={style.flex}>
    {props.children}
  </div>
)


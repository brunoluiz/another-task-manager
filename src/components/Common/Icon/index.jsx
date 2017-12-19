import React from 'react';

import 'font-awesome/css/font-awesome.min.css'
import style from './style.module.css'

export default (props) => (
  <i
    className={`fa fa-${props.name} ${style.icon}`}
    aria-hidden='true'
  ></i>
)

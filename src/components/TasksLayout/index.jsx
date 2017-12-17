import React from 'react';

import ChecklistList from '../../containers/Checklists'
import Tasks from '../../containers/Tasks'

import style from './style.module.css'

export default (props) => (
  <div className={style.container}>
    <ChecklistList className={style.checklist}/>
    <Tasks className={style.task}/>
  </div>
)

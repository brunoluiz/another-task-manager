import React from 'react';

import ChecklistList from '../../containers/Checklists'
import Tasks from '../../containers/Tasks'

import styles from './styles.module.css'

export default (props) => (
  <div className={styles.container}>
    <ChecklistList className={styles.checklist}/>
    <Tasks className={styles.task}/>
  </div>
)

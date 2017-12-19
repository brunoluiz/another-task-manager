import React from 'react';

import style from './style.module.css'

import Button from '../../Common/Button'
import Checkbox from '../../Common/Checkbox'
import FlexRow from '../../Common/FlexRow'
import Icon from '../../Common/Icon'
import Input from '../../Common/Input'

export default (props) => (
  <li className={style.item}>
    <FlexRow>
      <Checkbox
        checked={props.done}
        onChange={props.onToogle}
        type="checkbox"
        value={props.id}
      />
      <Input
        onChange={(e) => props.onUpdate(e, props.id)}
        value={props.value}
      />
      <Button
        className={style.deleteButton}
        onClick={() => props.onDelete(props.id)}
      ><Icon name='trash'/></Button>
    </FlexRow>
  </li>
)


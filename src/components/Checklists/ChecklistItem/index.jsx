import React from 'react';

import style from './style.module.css'

import Button from '../../Common/Button'
import FlexRow from '../../Common/FlexRow'
import Icon from '../../Common/Icon'
import Input from '../../Common/Input'

const isUpdatable = (props) =>
  (props.lists.updatable === props.id)

const textComponent = (props) => isUpdatable(props)
   ? <Input
      onChange={(e) => props.onUpdate(e, props.id)}
      onKeyPress={(e) => props.onUpdateSave(e)}
      className={style.text}
      type="text"
      value={ props.name }
    />
  : <a
      href='#'
      className={style.textLink}
      onClick={(e) => props.onListChange(e, props.id)}
    >{ props.name }</a>

const buttonComponent = (props) => isUpdatable(props)
  ? <Button
      borderless
      onClick={() => props.onUpdatable(null)}
    ><Icon name='check'/></Button>
  : <Button
      borderless
      onClick={() => props.onUpdatable(props.id)}
    ><Icon name='pencil'/></Button>

export default (props) => {
  return (<li>
    <FlexRow>
      { textComponent(props) }
      { buttonComponent(props) }
      <Button
        borderless
        onClick={() => props.onDelete(props.id)}
      ><Icon name='trash' /></Button>
    </FlexRow>
  </li>)
}



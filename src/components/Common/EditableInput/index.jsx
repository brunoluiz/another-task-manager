import React from 'react';

import Input from '../Input'
import Button from '../Button'
import Icon from '../Icon'
import style from './style.module.css'

const textComponent = (props) => (props.isUpdatable)
   ? <Input
      className={style.input}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      type="text"
      value={ props.children }
    />
  : <a
      href='#'
      className={style.link}
      onClick={props.onTextClick}
    >{ props.children }</a>

const buttonComponent = (props) => (props.isUpdatable)
  ? <Button
      onClick={props.onSaveClick}
    ><Icon name='check'/></Button>
  : <Button
      onClick={props.onEditClick}
    ><Icon name='pencil'/></Button>

export default (props) =>
  <span>
    { textComponent(props) }
    { buttonComponent(props) }
  </span>

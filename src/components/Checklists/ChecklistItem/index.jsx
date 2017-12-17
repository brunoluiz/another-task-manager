import React from 'react';

import EditableInput from '../../Common/EditableInput'

export default (props) => {
  return (<li>
    <EditableInput
      isUpdatable={(props.lists.updatable === props.id)}
      onKeyPress={(e) => props.onUpdateSave(e)}
      onChange={(e) => props.onUpdate(e, props.id)}
      onSaveClick={() => props.onUpdatable(null)}
      onEditClick={() => props.onUpdatable(props.id)}
      onTextClick={(e) => props.onListChange(e, props.id)}
    >{ props.name }</EditableInput>
    <button
      onClick={() => props.onDelete(props.id)}
    >Delete</button>
  </li>)
}



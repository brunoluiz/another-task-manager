import React from 'react';

export default (props) => (<li>
  <input
    checked={props.done}
    onChange={props.onToogle}
    type="checkbox"
    value={props.id}
  />
  <input
    onChange={(e) => props.onUpdate(e, props.id)}
    type="text"
    value={props.value}
  />
  <button
    onClick={() => props.onDelete(props.id)}
  >Delete</button>
</li>)

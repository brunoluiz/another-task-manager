import React from 'react';

export default (props) => (<li>
  <input 
    checked={props.done}
    onChange={props.onToogle}
    type="checkbox" 
    value={props.id}
  />
  <input
    onChange={(e) => props.onUpdate(e, props)}
    type="text"
    value={props.value}
  />
  <button
    onClick={(e) => props.onDelete(e, props.id)}
  >Delete</button>
</li>)

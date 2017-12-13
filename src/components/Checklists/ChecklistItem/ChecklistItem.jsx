import React from 'react';

export default (props) => (<li>
  <input
    onChange={(e) => props.onUpdate(e, props.id)}
    type="text"
    value={props.name}
  />
  <button
    onClick={() => props.onDelete(props.id)}
  >Delete</button>
</li>)


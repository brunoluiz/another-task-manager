import React from 'react';

export default (props) => (<li>
  <input
    onKeyPress={props.onCreate}
    type="text"
  />
</li>)

import React from 'react';

import Input from '../../Common/Input'

export default (props) => (<li>
  <Input
    onKeyPress={props.onCreate}
    type="text"
  />
</li>)

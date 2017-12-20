import React from 'react';

import { Icon } from 'antd'
import { Input } from 'antd'
import { List } from 'antd';

export default (props) => (<li>
  <List.Item>
    <Input
      onKeyPress={props.onCreate}
      onChange={props.onChange}
      placeholder='Add a task'
      prefix={<Icon type='plus' style={{ color: 'rgba(0,0,0,.25)' }} />}
      type="text"
    />
  </List.Item>
</li>)

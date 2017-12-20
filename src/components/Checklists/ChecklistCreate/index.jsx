import React from 'react';

import { Icon } from 'antd'
import { Input } from 'antd'
import { Menu } from 'antd';

export default (props) => (
  <Menu.Item>
    <Input
      onKeyPress={props.onCreate}
      onChange={props.onChange}
      placeholder='Add a Menu'
      prefix={<Icon type='plus' style={{ color: 'rgba(0,0,0,.25)' }} />}
      type="text"
    />
  </Menu.Item>
)

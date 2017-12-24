import React from 'react';

import Checklists from '../../containers/Checklists'
import style from './style.module.css'
import Tasks from '../../containers/Tasks'
import {
  Icon,
  Layout
} from 'antd';

const {
  Content,
  Footer,
  Header,
  Sider
} = Layout;

export default (props) => (
  <Layout className={style.layout} >
    <Checklists/>
    <Tasks className={style.contentLayout}/>
  </Layout>
)

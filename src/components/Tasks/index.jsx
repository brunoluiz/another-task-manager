import React from 'react';

import style from './style.module.css'
import TaskList from './TaskList'
import {
  Icon,
  Layout
} from 'antd';

const {
  Content,
  Footer,
  Header
} = Layout;

export default (props) => (
  <Layout>
    <Header className={style.header}>
      <Icon
        className={style.trigger}
        type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={props.onToggle}
      />
      <span>
        Remaining tasks
      </span>
    </Header>
    <Content className={style.contentLayout} >
      <TaskList
        className={style.contentLayout}
        {...props}
      />
    </Content>
    <Footer className={style.contentFooter}>
      <small>Made by <a href='http://brunoluiz.net'>Bruno Luiz</a></small>
    </Footer>
  </Layout>
);

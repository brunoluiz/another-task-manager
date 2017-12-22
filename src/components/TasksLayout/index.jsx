import React from 'react';

import ChecklistList from '../../containers/Checklists'
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

export default class extends React.Component {
  state = { collapsed: false };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout className={style.layout} >
        <Sider
          breakpoint='xs'
          collapsed={this.state.collapsed}
          collapsedWidth={0}
          collapsible
          trigger={null}
          width={250}
        >
          <div className={style.logo} />
          <ChecklistList/>
        </Sider>
        <Layout>
          <Header className={style.header}>
            <Icon
              className={style.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className={style.contentLayout} >
            <Tasks className={style.contentLayout}/>
          </Content>
          <Footer className={style.contentFooter}>
            <small>Made by <a href='http://brunoluiz.net'>Bruno Luiz</a></small>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

import React from 'react';

import ChecklistList from '../../containers/Checklists'
import Tasks from '../../containers/Tasks'

import { Layout } from 'antd';
const { Content, Footer, Sider } = Layout;

export default class extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout
        style={{ minHeight: '100vh' }}
      >
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          breakpoint='xs'
          collapsedWidth={0}
          width={250}
        >
          <ChecklistList/>
        </Sider>
        <Layout
          style={{ padding: '0 24px' }}
        >
          <Content>
            <Tasks/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <small>Made by <a href='http://brunoluiz.net'>Bruno Luiz</a></small>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

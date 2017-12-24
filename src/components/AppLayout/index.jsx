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

export default class extends React.Component {
  state = { collapsed: false };

  doToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout className={style.layout} >
        <Checklists
          collapsed={this.state.collapsed}
        />
        <Tasks
          className={style.contentLayout}
          onToggle={this.doToggle}
          collapsed={this.state.collapsed}
        />
      </Layout>
    )
  }
}

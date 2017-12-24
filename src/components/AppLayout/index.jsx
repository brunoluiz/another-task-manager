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

  doToggle = () => {
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
        <Tasks
          className={style.contentLayout}
          onToggle={this.doToggle}
          collapsed={this.props.collapsed}
        />
      </Layout>
    )
  }
}

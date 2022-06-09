import React from 'react'
import { Layout, Menu } from 'antd'
import {Outlet} from 'react-router-dom'
import './index.less'

const { Header, Content, Footer } = Layout;
function BaseLayout() {
  const menu = [
    {
      label: 'Home',
      path: '/',
      key: 'home'
    },
    {
      label: 'About',
      path: '/',
      key: 'about'
    },
    {
      label: 'Projects',
      path: '/',
      key: 'project',
      children: [
        {
          label: 'Option 1',
          key: 'setting:1',
        },
        {
          label: 'Option 1',
          key: 'setting:2',
        },
      ]
    },
    {
      label: 'Support',
      path: '/',
      key: 'support'
    },
    {
      label: 'Community',
      path: '/',
      key: '5'
    },
  ]
  return (
    <Layout className='summeros'>
      <Header>
        <div className="logo" >1</div>
        <Menu
          className='menu'
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={menu}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default BaseLayout;

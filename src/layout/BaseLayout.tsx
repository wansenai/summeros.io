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
      <Header className='header'>
        <div className="logo" >
        </div>
        <Menu
          className='menu'
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={menu}
        />
      </Header>
      <Content className="content">
          <Outlet/>
      </Content>
      <Footer className="footer" >Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default BaseLayout;

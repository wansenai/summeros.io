import React from 'react'
import { Layout, Menu } from 'antd'
import { Outlet } from 'react-router-dom'
import getHomeSrc from '@src/utils'
import './index.less'

const { Header, Content, Footer } = Layout
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
          key: 'setting:1'
        },
        {
          label: 'Option 1',
          key: 'setting:2'
        }
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
    }
  ]
  return (
    <Layout className="summeros">
      <Header className="header">
        <div className="logo"></div>
        <Menu
          className="menu"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={menu}
        />
      </Header>
      <Outlet />
      <Footer className="footer">
        <div className="footer-content">
          <div className="flex space-between">
            <div className="trabook">
              <h3>Trabook</h3>
              <p>Book your trip in minute, get full Control for much longer.</p>
              <img src="/image/Home/Social@2x.png" alt="" />
            </div>
            <div className="flex">
              <div className="item">
                <h3>Company</h3>
                <p>About</p>
                <p>Careers</p>
                <p>Logistic</p>
                <p>Privacy & Policy</p>
              </div>
              <div className="item">
                <h3>Contact</h3>
                <p>Help/FAQ</p>
                <p>Press</p>
                <p>Affilates</p>
              </div>
              <div className="item">
                <h3>More</h3>
                <p>Press Centre</p>
                <p>Our Blog</p>
                <p>Low fare tips</p>
              </div>
            </div>
          </div>
          <div className="flex space-between copyright">
            <p>Copyright, Trabook 2022. All rights reserved.</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </Footer>
    </Layout>
  )
}

export default BaseLayout

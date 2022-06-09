import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import {Outlet} from 'react-router-dom'
// import NavBar from './NavBar'
// import MainContent from './MainContent'

const { Header, Content, Footer } = Layout;
function BaseLayout() {
    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
      <Outlet/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        
        {/* <MainContent /> */}
      </Layout>
    )
}

export default BaseLayout;

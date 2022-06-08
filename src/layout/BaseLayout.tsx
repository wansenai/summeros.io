import React, { useState, useEffect } from 'react'
import { Affix, Layout, Menu } from 'antd'
// import NavBar from './NavBar'
// import MainContent from './MainContent'

function BaseLayout() {
    return (
      <Layout>
        <Affix offsetTop={0}>
          {/* <NavBar /> */}
        </Affix>
        {/* <MainContent /> */}
      </Layout>
    )
}

export default BaseLayout;

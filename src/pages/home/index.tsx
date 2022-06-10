import React from 'react';
import './index.less'

function Home() {
  return (
    <div className='home'>
      <div className='top flex'>
        <div className='title'>
          <p>Summer</p>
          <p>Open Source</p>
          <p className='green'>Projects</p>
          <p>We are an open source project organization focusing on the construction of the next generation Web3 framework. </p>
        </div>
        <div className='info flex-1'>
          {/* <img src='@image/Home/Btn-2@2x.png'/> */}
          <div className='line'>
            <div className='card'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { Button, Select, Input } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import getHomeSrc from '@src/utils'
import './index.less'

const { Option } = Select;

function Home() {
  return (
    <div className='home'>
      <div className='top'>
        <div className='flex home-content'>
          <div className='title'>
            <p>Summer</p>
            <p>Open Source</p>
            <p className='green'>Projects</p>
            <p>We are an open source project organization focusing on the construction of the next generation Web3 framework. </p>
          </div>
          <div className='info flex-1'>
            <div className='background'>
              <img src={getHomeSrc('Vector@2x.png')} alt="" />
            </div>
            <div className='card-box'>
            <div className='line'>
              <div className='card flex align-center'>
                <img src={getHomeSrc("trophy-removebg-preview 1@2x.png")} alt="" />
                <div>
                  <p>Best Open</p>
                  <p>Source</p>
                </div>
              </div>
            </div>
            <div className='line flex flex-end align-center'>
              <div className='card flex'>
                <img src={getHomeSrc("google-maps 1@2x.png")} alt="" />
                <div>
                  <p>Explore</p>
                  <p className='gray'>Every cornar of the world with us</p>
                </div>
              </div>
            </div>
            <div className='line'>
              <div className='card flex align-center'>
                <img src={getHomeSrc("star 1@2x.png")} alt="" />
                <div>
                  <p>52</p>
                  <p className='gray'>Github Follow</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-content'>
      <Button className='button-green start-btn' size="large" type="primary">Quick Start</Button>
      </div>
      <div className='doc-area flex space-between'>
        <div className='flex select-box'>
          <div className='select-item'>
            <Select placeholder="Project" style={{ width: 120 }} bordered={false}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <p className='ignore'>Choose a project</p>
          </div>
          <div className='select-item'>
            <Select placeholder="Version" style={{ width: 120 }} bordered={false}>
              <Option value="lucy">Lucy</Option>
            </Select>
            <p className='ignore'>Choose a version</p>
         </div>
        </div>
        <Button className='button-green' size="large" type="primary">Read Document</Button>
      </div>
      <div className='to-do'>
        <div className='home-content'>
          <div className='to-do-title'>
            <h2>What summer <span>to do</span></h2>
            <p>Summer open source projects projects incubated at this stage.</p>
            <img src="/image/Home/Element@2x (1).png" alt="" />
          </div>
          <div className='to-do-content flex space-between'>
            <div className='card'>
              <img src="/image/Home/Group@2x.png" alt="" />
              <h3>Summer Boot</h3>
              <p>Build a decentralized framework based on web3 (currently in the preparation stage)</p>
            </div>
            <div className='card'>
              <img src="/image/Home/Group@2x-1.png" alt="" />
              <h3>Summer Mybatis</h3>
              <p>ORM framework based on rust language. It is used to simplify development. </p>
            </div>
            <div className='card'>
              <img src="/image/Home/Group@2x-2.png" alt="" />
              <h3>Summer IPFS Client</h3>
              <p>Client developed based on rust language for connecting to IPFs server</p>
            </div>
          </div>
        </div>
      </div>
      <div className='email-box'>
        <div className='email'>
          <p>Subscribe and get exclusive deals & offer</p>
          <div className='input-box'>
            <Input placeholder="Basic usage" />;
            <Button className='email-btn' size="large" type="primary">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

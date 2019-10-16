import React,{Component} from 'react'
import {getPosterlist,getmoviedetial} from './detailsApi'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';


function renderTabBar(props) {
  return (<Sticky>
      
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '今天10月14日', key: 't1' },
  { title: '明天10月15日', key: 't2' },
  { title: '后天10月16日', key: 't3' },
  { title: '周四10月17日', key: 't4' },
  { title: '周五10月18日', key: 't5' },
  { title: '周六10月19日', key: 't6' },
  { title: '周日10月20日', key: 't7' },
  
];

const Showdate = () => (
  <div>
    <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={tabs}
        initialPage={'t2'}
        renderTabBar={renderTabBar}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of first tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
  </div>
);


export default Showdate
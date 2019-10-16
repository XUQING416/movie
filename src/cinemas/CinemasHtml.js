import React from "react"

import { SearchBar, Menu, ActivityIndicator, NavBar   } from 'antd-mobile';

import cinemascss from './cinemas.module.css'
import SouInput from "../Xu/Sou"
const data = [
  {
    value: '1',
    label: '商区',
    children: [
      {
        label: '江宁区(22)',
        value: '1',
        disabled: false,
      },
      {
        label: '鼓楼区(21)',
        value: '2',
      }, {
        label: '浦口区(13)',
        value: '3',
      }, {
        label: '栖霞区(11)',
        value: '4',
      }, {
        label: '六合区(12)',
        value: '5',
      }, {
        label: '秦淮区(10)',
        value: '6',
      }, {
        label: '雨花台区(9)',
        value: '7',
      }, {
        label: '玄武区(9)',
        value: '8',
      }, {
        label: '建邺区(8)',
        value: '9',
      }, {
        label: '溧水区(8)',
        value: '10',
      }, {
        label: '高淳区(3)',
        value: '11',
      }],
  }, 
  {
    value: '2',
    label: '地铁站',
    children: [
      {
        label: 'All Supermarkets',
        value: '1',
      }, {
        label: '2号线(38)',
        value: '2',
        disabled: false,
      }, {
        label: '3号线(33)',
        value: '3',
      }, {
        label: '4号线(9)',
        value: '4',
      }, {
        label: '10号线(13)',
        value: '5',
      }, {
        label: 'S3',
        value: '6',
      }, {
        label: 'S7(1)',
        value: '7',
      }, {
        label: 'S9(1)',
        value: '8',
      }, {
        label: '宁天线(11)',
        value: '9',
      }, {
        label: '机场线(3)',
        value: '10',
      }],
  }
];
class CinemasHtml extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }

  onChange = (value) => {
    console.log(value);
  }
  onOk = (value) => {
    console.log(value);
    this.onCancel();
  }
  onCancel = () => {
    this.setState({ show: false });
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="multi-foo-menu"
        data={initData}
        value={['1', ['3', '4']]}
        onChange={this.onChange}
        onOk={this.onOk}
        onCancel={this.onCancel}
        height={document.documentElement.clientHeight * 0.6}
        multiSelect
      />
    )
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    )

    return (
      <div id="header">
     
      <div className={cinemascss.navheader}>影 院</div>
   

      {/* <p><SouInput /></p>
       
      <div className={show ? 'multi-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="全城"
            mode="light"
            onLeftClick={this.handleClick}
            className="multi-top-nav-bar"
          >
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div> */}
     
     
</div>
     
    );
  }
}

export default CinemasHtml























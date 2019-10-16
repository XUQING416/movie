import React from "react"
import "./my.css"
import store from "./store"
import { observer } from "mobx-react"

import { withRouter} from "react-router-dom"


import { Tabs, WhiteSpace, Badge,Button, WingBlank  } from 'antd-mobile';

// import { List, InputItem, Toast } from 'antd-mobile';

const tabs = [
  { title: <Badge>美团账号登陆</Badge> },
  { title: <Badge>手机验证登陆</Badge> },

];
@withRouter
@observer
class Login extends React.Component{
  constructor(){
    super()
    this.state = {
     
      file :"",
      hasError: false,
      value: '',
    }
  }
  // onErrorClick = () => {
  //   if (this.state.hasError) {
  //     Toast.info('Please enter 11 digits');
  //   }
  // }

  changeEmail(e){
    store.email=e.target.value
    
  }
  changePassword(e){
    store.password=e.target.value
    // console.log(store)
  }
  async login(){
    const data = await  store.getPersonal()
    console.log(data)
    if(data.msg=="登入成功"){
      this.props.history.push("/my")
    }else{
      alert("账号或密码错误")
      return
    }
  }
  register(){
    
    this.props.history.push("/register")
  }
  fileChange(e){

    this.state.file=(document.querySelector('input[type=file]').files[0])
    console.log(this.state.file)
  }
  fallback(){
    this.props.history.go(-1)
  }
  render(){
    return(
      <div >
        <div className="headxu" ><span style={{display:"block",float:"left",height:"100px",width:"100px",background:'url(' + require("./返回.png") + ') no-repeat center center'}} 
        onClick={this.fallback.bind(this)}></span>猫眼电影</div>
        <Tabs tabs={tabs}
          initialPage={0}
          tabBarUnderlineStyle={{border:"4px solid #FFC300"}}
          tabBarActiveTextColor="black"
          distanceToChangeTab = "" 
          swipeable={false}
          // onChange={(tab, index) => { console.log('onChange', index, tab); }}
          // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div>
            <ul className="ulxu">
              <li>
                <input type="text" value={store.email} placeholder="账户名/手机号/Email"
                onChange={this.changeEmail}/>
              </li> 
              <li><input type="password" value={store.password} placeholder="请输入您的密码"
                onChange={this.changePassword}/></li>
            </ul>
            <Button type="warning" style={{width:"710px",height:"60px",margin:"10px auto",font:"32px/60px ''"}}
            onClick={this.login.bind(this)}
            >登陆</Button><WhiteSpace />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
        </Tabs>
        <div className="footerxu">
          <span onClick={this.register.bind(this)}>立即注册</span>   
          <span>找回密码</span>
        </div>
       
      </div>
    )
  }
}

export default Login



  // onChange = (value) => {
  //   if (value.replace(/\s/g, '').length < 11) {
  //     this.setState({
  //       hasError: true,
  //     });
  //   } else {
  //     this.setState({
  //       hasError: false,
  //     });
  //   }
  //   this.setState({
  //     value,
  //   });
  // }
 
      // <div>
      //   <List renderHeader={() => 'Confirm when typing'}>
      //     <InputItem
      //       type="phone"
      //       placeholder="input your phone"
      //       error={this.state.hasError}
      //       onErrorClick={this.onErrorClick}
      //       onChange={this.onChange}
      //       value={this.state.value}
      //     >手机号码</InputItem>
      //   </List>
      // </div>
 



import React from "react"
import { TabBar } from 'antd-mobile';
import { withRouter,Route} from "react-router-dom"

import My from "./xiao/my"

@withRouter 
class Tabbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '',
      hidden: false,
      fullScreen: false,
    };
  }
    componentDidMount(){
     
      
      let path = this.props.location.pathname
      if(path == "/my"){
          if(localStorage.token){
          this.props.history.push("/my")
          this.setState({
          selectedTab: "/my"
        })}else{this.props.history.push("/login")}
      }else{
        this.props.history.push(path)
      }

      
      if (path == "/register"||path == "/login") {
        this.setState({
        hidden: true
        })
      }else{
        this.setState({
        hidden: false,    
        })
      }
        console.log(path)
      this.setState({
        selectedTab: path
      })

        
        // if(path == "/"){
        //   if(localStorage.token){
        //   this.props.history.push("/my")
        //   this.setState({
        //     selectedTab: "/my"
        //   })}else{this.props.history.push("/login")}
        // }
    }
    componentWillReceiveProps(nextProps) {

      let path = nextProps.location.pathname
 
      
    if (path == "/register"||path == "/login") {
      this.setState({
        hidden: true
      })
    }else{
      this.setState({
        hidden: false,  
      })
    }
  }




    
    
    


  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
        
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
      
          </TabBar.Item >
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === '/my'}
            onPress={() => {
              if(localStorage.token){
              this.props.history.push("/my")
            }else
            {
              this.props.history.push("/login")
            }

              this.setState({
                selectedTab: '/my',
              });
            }}
          > 
          
          <Route path="/my" component={My} />  
          
            
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Tabbars
import React from "react"
import { TabBar } from 'antd-mobile';
import { withRouter,Route} from "react-router-dom"
import Movies from "./Xu/Movies"
import Cinemas from "./cinemas/Cinemas";
import My from "./xiao/my"
// import CinemasDetail from "./cinemas/CinemasDetail"
class Tabbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '/movies',
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
  if(path=="/"){
    this.props.history.push("/movies") 
  }
  
  if (path == "/register"||path == "/login"||path == "/moviedetial") {
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

}
componentWillReceiveProps(nextProps) {

  let path = nextProps.location.pathname
  // if(path=="/"){
  //   this.setState({
  //     hidden: false,
  //     selectedTab: "movies"
  //   })
    
  // }
  
if (path == "/register"||path == "/login"||path == "/moviedetial") {
  this.setState({
    hidden: true,
    selectedTab: path
  })
}else{
  this.setState({
    hidden: false,  
    selectedTab: path
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
            title="电影"
            key="movies"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+require("./Xu/img/1.png")+') center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+require("./Xu/img/2.png")+') center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === '/movies'}
           
            onPress={() => {
              this.props.history.push("/movies")
              
            }}
            data-seed="logId"
          >
            <Route path="/movies" component={Movies}/>
            </TabBar.Item>
          <TabBar.Item
            
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+require("./cinemas/imgs/影院A (2).png")+') center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+require("./cinemas/imgs/影院A (1).png")+') center center /  21px 21px no-repeat' }}
            />}
            title="影院"
            key="cinemas"
            selected={this.state.selectedTab === '/cinemas'}
            onPress={() => {
              
            this.props.history.push('/cinemas')
            }}
            data-seed="logId1"
          >
          <Route path="/cinemas" component={Cinemas} />
          {/* <Route path="/detail" component={CinemasDetail}  /> */}
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+require("./xiao/img/my1.png")+') center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+require("./xiao/img/my2.png")+') center center /  21px 21px no-repeat' }}
            />}
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

export default withRouter(Tabbars)
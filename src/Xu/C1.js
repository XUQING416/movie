import React from 'react';
import store from "../xiao/store"
import { getmov4 } from "./api"
// import { withRouter} from "react-router-dom"
// @withRouter
import Xucss from "./Movies.css"
class Cidetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users:[],
        userss:[],
        isLoaded:false
      }
    }
    
    componentDidMount() {
      console.log(store.cid);
      
      getmov4({cinemaId:store.cid})
      // getmov4()
        .then(res => {
     
        console.log(res);
        
          this.setState({
            users:res.data,
            userss:res.data.featureTags,
            isLoaded:true
          });
  
        }
        
        )
        
        
    }
    
    handleclick(){
    
        this.props.history.go(-1)
      
    }
    
    render() {
      // console.log(this.state.users);
      const arr1=this.state.users
      const arr2=this.state.userss
      // console.log(arr1);
      
      return (
        // <Router>
  
        <div  style={{background:"white"}}>
            <div>
            <div className="headleft" style={{float:"left"}}>
                        <a className="back" onClick={this.handleclick.bind(this)} style={{color:"white"}}>&lt;</ a>
                        </div>
            <div className="Movies-header">
                    猫 眼 电 影
                </div>
                </div>
            <div >
             
            <h1 className="C1-h1">{arr1.nm}</h1>

            <p className="C1-p1"><img src={[require("./img/phone.png")]}/>&nbsp;&nbsp;&nbsp;{arr1.tel}</p>
            <p className="C1-p1"><img src={[require("./img/dw.png")]}/>&nbsp;&nbsp;&nbsp;{arr1.addr}</p>
            <p className="C1-p1"><img src={[require("./img/la.png")]}/>&nbsp;&nbsp;&nbsp;{arr1.notice}</p>
            <p className="C1-p2">特色信息</p>
            {arr2.map((item, index) => (<div key={index} className="C1-ok" >
                <p className="C1-p3"><span >{item.tag}</span>{item.desc}</p>

            </div>))}
             
            </div>
          
        </div>
        /* </Router> */
  
    )
      
    }
  }
  export default Cidetail
import React from "react"
import "./my.css"
import store from "./store"
import { observer } from "mobx-react"

@observer
class My extends React.Component{
    componentDidMount(){
        store.verify()
    }
    render(){
        return(
            <div style={{background:"#F3F3F3"}}>
               
            <div className="headerxu" style={{overflow:"hidden"}}>
            <span style={{display:"block",textAlign:"center",font:"30px/40px ''"}}>{store.nickname}</span> 
                <span style={{borderRadius:"50%",width:"140px",height:"140px",background:'url(' + require("./1.jpg") + ') center center',display:"block",margin:"50px auto"}}></span>
                
            </div>
            <div className="order" style={{background:"white",marginTop:"20px"}}>
                <span className="line"></span>
                <span className="txt">我的订单</span>
                <span className="line"></span>
            </div>
            <nav style={{background:"white"}} className="navxu">
                <div>
                    <p className="pxu" style={{background:"#FF605A",width:"70px",height:"70px"}}><img src={require('./电影.png')}/></p>
                    电影
                </div>
                <div>
                    <p className="pxu" style={{background:"#40D6C2",width:"70px",height:"70px"}}><img src={require('./商城.png')}/></p>
                    商城
                </div>
            </nav>
            <ul style={{marginTop:"20px"} } className="ulxu">
                <li>在线观影</li>
                <li>优惠券</li>
                <li>折扣卡</li>
            </ul>
            
            </div>
        )
    }
}
export default My
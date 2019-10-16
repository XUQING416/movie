import React from "react"
import mycss from './my.module.css'
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
               
            <div className={mycss.headerxu} style={{overflow:"hidden"}}>
            <span style={{display:"block",textAlign:"center",font:"30px/40px ''"}}>{store.nickname}</span> 
                <span style={{borderRadius:"50%",width:"140px",height:"140px",background:'url(' + require("./1.jpg") + ') center center',display:"block",margin:"50px auto"}}></span>
                
            </div>
            <div className={mycss.order} style={{background:"white",marginTop:"20px"}}>
                <span className={mycss.line}></span>
                <span className={mycss.txt}>我的订单</span>
                <span className={mycss.line}></span>
            </div>
            <nav style={{background:"white"}} className={mycss.navxu}>
                <div>
                    <p className={mycss.pxu} style={{background:"#FF605A",width:"70px",height:"70px"}}><img src={require('./电影.png')}/></p>
                    电影
                </div>
                <div>
                    <p className={mycss.pxu} style={{background:"#40D6C2",width:"70px",height:"70px"}}><img src={require('./商城.png')}/></p>
                    商城
                </div>
            </nav>
            <ul style={{marginTop:"20px"} } className={mycss.ulxu}>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在线观影</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;优惠券</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;折扣卡</li>
            </ul>
            
            </div>
        )
    }
}
export default My
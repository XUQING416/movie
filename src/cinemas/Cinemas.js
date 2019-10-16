import React from "react"
// import {getCinemasList} from './cinemasApi/index'
import CinemasHtml from './CinemasHtml'
import {observer} from 'mobx-react'
import store from './store/index'
import {Route,withRouter} from 'react-router-dom'
import CinemasDetail from './CinemasDetail'
import cinemascss from './cinemas.module.css'
@withRouter
@observer
class Cinemas extends React.Component{
    constructor(){
        super()
       
        this.state={
   
            isLoaded:false
            
        }
    }
    componentDidMount(){
       
    store.getCinemasList()  
 
    }  
    jumpDetail(){
        this.props.history.push("/detail")
    }
    render(){
        let arr=store.cinemas.slice()
        let newArr=arr.map(
            (item,index)=>(
                <div key={index} onClick={this.jumpDetail.bind(this)} className={cinemascss.li}>
                   <h3 className={cinemascss.h}>{item.nm} &nbsp;&nbsp;&nbsp;&nbsp;
                   <span className={cinemascss.price}>{item.sellPrice}</span>
                   <span className={cinemascss.y}>元起</span>
                   </h3>
                   <p className={cinemascss.addr}>{item.addr} &nbsp;&nbsp;&nbsp;&nbsp;
                   <span className={cinemascss.dis}>{item.distance}</span>
                   </p>
                   <p>
    <span className={cinemascss.endosre}>改签</span>&nbsp;&nbsp;
    <span className={cinemascss.s}>小吃</span>&nbsp;&nbsp;
    <span className={cinemascss.s}>{item.tag.vipTag}</span>&nbsp;&nbsp;
</p>
<p>
    {/* <span  style={{background:'url('+require("./imgs/card1.png")+')'}}></span> */}
    <span className={cinemascss.tag}>{item.promotion.cardPromotionTag}</span></p>
                </div>
            )
        )
        return (
                <div>
                       <CinemasHtml></CinemasHtml>
                    <div>
                        <div className={cinemascss.div}>{newArr}</div>
                        </div>
                </div>
        )
    }
}
export default Cinemas




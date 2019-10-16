import React,{Component} from "react"

import {getmoviedetial,getPosterlist} from "./detailsApi"
import MovieHead from './movieHead'
import Showdate from './Showdate'
import './css/moviedetialcss.css'




class Moviedetial extends Component{
        constructor(){
            super()
            this.state={
                
                list:[
                    
                ],
                postlist:[]
            }
        }             
                  componentDidMount(){ 
                    getmoviedetial()
                    .then(response => {
                        // console.log(response)
                        this.setState({
                            list:response.data.cinemas
                        })
                     })

                     //获取接口数据
                  }
    render(){
        // console.log(this.state.list)
        return (
            
            <div>
                
                <MovieHead/>
                <Showdate/>
                {this.state.list.map(item=><div className="cinema-list" key={item.id} className='title line-ellipsis'>
                        <div className='titlenig'>
                            <div className='titlefist'>{item.nm}</div>                        
                                <div className='titlesecond'>
                                <span className=''>{item.sellPrice}</span>
                                <span className=''>起</span>
                                </div>
                        </div>
                        <div className='titleadr'>
                            <div className='titleadrone'>{item.addr}</div>
                            <div className=''>{item.distance}</div>
                        </div>
                        <div>
                            <div className='zhekou'>
                            <span className="endorse">{item.tag.vipTag}</span>
                            <span className="hallType">{item.tag.hallType}</span>
                            </div>
                        </div>
                        <div className='litlepic'>
                            <div className="snack">{item.promotion.cardPromotionTag+'22'}</div>
                            <div className="logo-img" style={{
                            width: '45px',
                            height: '45px',
                            background: 'url('+require("../assets/img/66.png")+') center center /  40px 40px no-repeat' }}>
                            </div>
                        </div>
                        <div className='min-show'>
                            <span className=''>近期场次：09:55 | 10:20 | 11:50</span> 
                        </div>
                </div>)}
            </div>
            
        )
    }
}

export default Moviedetial



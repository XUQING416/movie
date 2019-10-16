import React,{Component} from 'react'
import {getPosterlist} from './detailsApi'
import Headdetails from './Headdetails'
import store from "../xiao/store"
import './css/style.css'
import {withRouter} from 'react-router-dom'
@withRouter
class MovieHead extends Component{
    constructor(){
        super()
        this.state={
            postlist:[]
        }
    }
    
    componentDidMount(){
        getPosterlist({movieId:store.id})   
        .then(res=>{
            // console.log(res)
          if(res.data.detailMovie){
           
            res.data.detailMovie.img=res.data.detailMovie.img.replace(/w.h/, "148.208")
            console.log(res.data.detailMovie)
            this.setState({
                postlist:res.data.detailMovie
            })}
        })
            // setTimeout(()=>{
            //     re=this.state.postlist.img.split('').slice(7).join('')
            //    console.log(re)
            // },200)
            // console.log(re)
    }  
    handleclick(e){
        console.log(this.props)
        this.props.history.push('/details')
        console.log(this.state.postlist.id)
    }
    handclickhistory(){
                this.props.history.go(-1)
            }
        //海报界面
    render(){
        // console.log(this.state.postlist.id)
        return(
            <div>
                 
                <div onClick={this.handleclick.bind(this)} >
                    <div className="header" id="header">
                        <div className="headleft">
                        <a className="back" onClick={this.handclickhistory.bind(this)}>&lt;</ a>
                        </div>
                        <div className="headright">
                            <h1>{this.state.postlist.nm}</h1>
                        </div>
                    </div>
                <div className="download-header">
                    <div className="logo-img" style={{
                        width: '100px',
                        height: '100px',
                        background: 'url('+require("../assets/img/logo.png")+') center center /  100px 100px no-repeat' }}>
                    </div>
                    <div className="info-wrapperr">
                        <div className="title" >猫眼</div>
                        <div className="contend">0元看电影，天天领现金</div>
                    </div>
                    <div className="link-btn" style={{
                        background: 'url('+require("../assets/img/1.png")+')  right /  50px 50px no-repeat ' }}>
                        点击领取
                    </div>
                </div>
                <div className="detail-box">
                        <div className="poster"><img src={this.state.postlist.img} width="210px"></img></div>
                        <div className="detail-content">
                            <div className="detail-title">{this.state.postlist.nm}</div>
                            <div className='detailsecond'>{this.state.postlist.enm}</div>
                            <div className='detailthird'>{this.state.postlist.sc}</div>
                            <div className='detailforth'>
                                <span >{this.state.postlist.cat}</span>
                            </div>
                            <div className='detailfive'>{this.state.postlist.src+'/'+this.state.postlist.dur+'分钟'}</div>
                            <div className='detailsixth'>{this.state.postlist.pubDesc}</div>
                        </div>
                </div>
                <div className="arrow-g"><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC'></img></div>
            </div>   
        </div>
        )
    }
}

export default MovieHead
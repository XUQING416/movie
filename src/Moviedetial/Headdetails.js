import React,{Component} from 'react'
import {getviewpep,getPosterlist} from './detailsApi'
import './css/headdetails.css'
import store from "../xiao/store"
 class Headdetails extends Component{
    constructor(){
        super()
        this.state={
            postlist:[]
        }
    }
    handclickhistory(){
                this.props.history.go(-1)
            }
     componentDidMount(){
        
     getPosterlist({movieId:store.id})
        .then(res=>{
            console.log(res)
          if(res.data.detailMovie){
           
            res.data.detailMovie.img=res.data.detailMovie.img.replace(/w.h/, "148.208")
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
    render(){
        return(
            <div>
                <div className="header" id="header">
                        <div className="headleft">
                        <a className="back" onClick={this.handclickhistory.bind(this)}>&lt;</ a>
                        </div>
                        <div className="headright">
                            <h1>{this.state.postlist.nm}</h1>
                        </div>
                    </div>
                <div className="detail-boxb">
                        <div className="posterb"><img src={this.state.postlist.img} ></img></div>
                        <div className="detail-contentb">
                            <div className="detail-titleb">{this.state.postlist.nm}</div>
                            <div className='detailsecondb'>{this.state.postlist.enm}</div>
                            <div className='detailthirdb'>{this.state.postlist.sc}</div>
                            <div className='detailforthb'>
                                <span >{this.state.postlist.cat}</span>
                            </div>
                            <div className='detailfiveb'>{this.state.postlist.src+'/'+this.state.postlist.dur+'分钟'}</div>
                            <div className='detailsixthb'>{this.state.postlist.pubDesc}</div>
                        </div>
                </div>
                <div className='bgcolor'>
                    <div className="arrow-gb"><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC'></img></div>
                    <div className='dartitle'><div>简介</div><div>展开</div></div>
                    <div className='dra'><span>{this.state.postlist.dra}</span></div>
                    <div className='actors'>
                        <div className='actorstitle'><div>演职人员</div><div>全部</div></div>
                        <div className='actorlist'>
                            <ul className='actorlistul'>
                                <li className='actorlistli'><img src='//p1.meituan.net/movie/c2b823eb9843a384fc72c44030bb34bd29204.jpg@160w_224h_1e_1c'></img></li>
                                <li><img src='//p1.meituan.net/movie/c43af5e137d4f2bde72e635bfc16dbdc32830.jpg@160w_224h_1e_1c'></img></li>
                                <li><img src='//p1.meituan.net/moviemachine/269c9ce921839e34a28dbf88f451299c36850.jpg@160w_224h_1e_1c'></img></li>
                                <li><img src='//p1.meituan.net/movie/b9e72fed100880e2866bc55562052ab351758.jpg@160w_224h_1e_1c'></img></li>
                                {/* <li><img src='//p0.meituan.net/movie/a42e5da8e35951fb718efb9b89be1d0233150.jpg@160w_224h_1e_1c'></img></li> */}
                            </ul>
                            <ul className='actorname'>
                                <li>刘伟强</li>
                                <li>张涵予</li>
                                <li>欧豪</li>
                                <li>杜江</li>
                                
                            </ul>
                        </div>
                        <div className='actorspictrue'><div>视频剧照</div><div>全部剧照</div></div>
                        <div className='actorspictrueshow'>
                            <ul className='actorspictrueshowa'>
                                <li><img src='//p1.meituan.net/movie/3b969a57e7e16d3f384d246953ae037989115.jpg@420w_279h_1e_1c'></img></li>
                                <li><img src='//p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@420w_279h_1e_1c'></img></li>
                                <li><img src='//p0.meituan.net/movie/bb748e0bcb92471bdf6c280319d3000589393.jpg@420w_279h_1e_1c'></img></li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className='buywrapper'>
                        <img className='buywrapperimg' src='//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/share-icon.png'></img>
                        <div className='buywrappera'>
                            特惠购票
                        </div>
                    </div>
            </div>
        )
    }
}
export default Headdetails
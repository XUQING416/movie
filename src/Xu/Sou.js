// import React from 'react';
// class SouInput extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             user:[]
//         }
//     }
//     render(){
//         return (
//             <div  className="Movies-input">
//                     <input type="text" placeholder="        输入你想看的电影"/>
//                     <button >搜索</button>
//                 </div>
//         )
//     }
// }
// export default SouInput
import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import { sou} from "./api"
import store from "../xiao/store"
import { observer } from "mobx-react"


// import PropTypes from 'prop-types';
import JSONP from  'jsonp'

 
//封装jonsp为promise对象


class SouInput extends Component{
    constructor(){
        super();
        this.state={
            val:"",
            arr:[],
            index:-1
        }
    }
    handleChange = async (e)=>{
        this.setState({val:e.target.value});//http://m.maoyan.com/ajax/search?kw=w&cityId=55&stype=-
        
    }
    
    handleKeyDown= (e)=>{
        if (e.keyCode ===13){
            sou({cityId:55,stye:-1,kw:this.state.val})
            .then(
               
                res=>{if(this.state.val!==""){if(res.data.movies.list){console.log(res.data.movies.list)

                    for(let i = 0 ;i<=res.data.movies.list.length-1;i++){
                        res.data.movies.list[i].img=res.data.movies.list[i].img. replace(/w.h/, "148.208")
                    }   
                    store.changelist(res.data.movies.list)}}else{window.location.href="movies"}
                }
            )
            //https://www.baidu.com/s?wd=xxx  百度的查询接口
          

            
            this.refs.input.focus();
        }
    }
    componentDidMount(){
        //生命周期，在组件加载完成后，让input聚焦 (focus)
        this.refs.input.focus();
    }
    
   
    render(){
        
        return (
            <div className="Movies-input">
                <input type="text" ref="input" value={this.state.val} onChange={this.handleChange}  onKeyDown={this.handleKeyDown} className='form-control' placeholder='    输入你想看的电影名'/>
                
                
            </div>
        )
    }
}
 
//简单的实现数据v-model实现   一定要用defaultValue  如果直接用value 则会将值写死，不会再改变了
render(<SouInput/>, document.getElementById("root"))
export default SouInput
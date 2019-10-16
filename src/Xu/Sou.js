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

// import PropTypes from 'prop-types';
import JSONP from  'jsonp'
 
//封装jonsp为promise对象
function jsonp(url,opts={}) {
    return new Promise((resolve,reject)=>{
        JSONP(url,opts, (err,data)=> {
            if (err) reject(err);
            resolve(data);
        })
    })
}
 
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
        this.setState({val:e.target.value});//http://m.maoyan.com/ajax/search?kw=w&cityId=55&stype=-1
        let {s} = await  jsonp("http://m.maoyan.com/ajax/search?cityId=55&stype=-1&kw="+this.state.val,{param:"cb"});
        this.setState({arr:s});
    }
    handleKeyUp= (e)=>{
        let keyCode = e.keyCode;
        if (keyCode === 38 || keyCode === 40) {
            if (keyCode === 38){
                this.setState({index:this.state.index-1})
                if (this.state.index<0){
                    this.setState({index:this.state.arr.length-1});
                }
                //根据上下键切换，则给表单时面赋不同的值
                e.target.value=this.state.arr[this.state.index+1];
                this.setState({val:e.target.value});
            } else {
                this.setState({index:this.state.index+1})
                if (this.state.index >= this.state.arr.length-1) {
                    this.setState({index:-1});
                }
                //根据上下键切换，则给表单时面赋不同的值
                e.target.value=this.state.arr[this.state.index+1];
                this.setState({val:e.target.value});
            }
        }
    }
    handleKeyDown= (e)=>{
        if (e.keyCode ===13){
            //https://www.baidu.com/s?wd=xxx  百度的查询接口
            window.open('http://m.maoyan.com/ajax/search?cityId=55&stype=-1&kw=' + this.state.val, '_blank');
            this.refs.input.focus();
        }
    }
    componentDidMount(){
        //生命周期，在组件加载完成后，让input聚焦 (focus)
        this.refs.input.focus();
    }
    handleMouseEnter=(key,item,event)=>{
        this.setState({index:key,val:item});
        this.refs.input.value = item;
    }
    handleClick =()=>{
        window.open('http://m.maoyan.com/ajax/search?cityId=55&stype=-1&kw=' + this.state.val, '_blank');
        this.refs.input.focus();
    }
    render(){
        
        return (
            <div className="Movies-input">
                <input type="text" ref='input' defaultValue={this.state.val} onChange={this.handleChange} onKeyUp={this.handleKeyUp}  onKeyDown={this.handleKeyDown} className='form-control' placeholder='    输入你想看的电影名'/>
                <ul className='list-group'>
                    {this.state.arr.map((item,key)=>{
                        return  <li onClick={this.handleClick} onMouseEnter={(event)=>this.handleMouseEnter(key,item,event)} className={key===this.state.index ? 'list-group-item active' :"list-group-item"} key={key}>{item}</li>
                    })}
                </ul>
                
            </div>
        )
    }
}
 
//简单的实现数据v-model实现   一定要用defaultValue  如果直接用value 则会将值写死，不会再改变了
render(<SouInput/>, document.getElementById("root"))
export default SouInput
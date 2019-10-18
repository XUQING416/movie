import React from "react"
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import mycss from './my.module.css'
import {Register} from "./api"
import { withRouter} from "react-router-dom"
@withRouter
class Registered extends React.Component{
    constructor(){
        super();
        this.state = {
            username:"",
            password:"",
            nickname:""
        }
    }
    changeUser(e){
        this.setState({
            username : e.target.value
        })
        
    }
    changePassword(e){
        this.setState({
            password : e.target.value
        })
        
    }
    changeNick(e){
        this.setState({
            nickname : e.target.value   
        })
    }
    register(){
        
        Register({username:this.state.username,password:this.state.password,nickname:this.state.nickname})
        .then(
            res=>{
                if(res.data.msg=="注册成功"){
                    console.log(res)
                    this.props.history.push("/login")
                }else{

                    alert("注册失败")
                } 
            }
        )   
    }
    fallback(){
        this.props.history.go(-1)
    }

    render(){
        return (<div>
            <div className={mycss.headxu}><span style={{display:"block",float:"left",height:"100%",width:"100px",background:'url(' + require("./ff.png") + ') no-repeat center center'}} onClick={this.fallback.bind(this)}></span>猫眼电影</div>
            <ul className={mycss.ulxu}>
                <li style={{marginBottom:"20px"}}>
                    <input type="text" value={this.state.nickname} placeholder="昵称"
                    onChange={this.changeNick.bind(this)}/>
                </li>
                <li style={{marginBottom:"20px"}}>
                    <input type="text" value={this.state.username} placeholder="账户名/手机号/Email"
                    onChange={this.changeUser.bind(this)}/>
                </li>
                <li>
                    <input type="password"  placeholder="密码"  value={this.state.password}
                    onChange={this.changePassword.bind(this)}/></li>
            </ul>
            <Button type="warning" style={{width:"710px",height:"60px",margin:"10px auto",font:"32px/60px ''"}}
          
            onClick={this.register.bind(this)}>注册</Button><WhiteSpace />
        </div>)
    }

}
export default Registered
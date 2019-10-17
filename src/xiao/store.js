import { observable, action,runInAction,computed} from "mobx"
import {Login,Verify} from "./api";
// import mycss from './my.module.css'

class store {
    @observable email="zlz"
    @observable password="123"
    @observable nickname=localStorage.getItem("nickname")
    @observable token=localStorage.getItem("token")
    @observable uId = localStorage.getItem("uId")
    @observable id =  localStorage.id
    @observable cid =  localStorage.cid
    @observable list = []
    @action async getPersonal () {              
        let data = []
        await Login({"username":this.email,"password":this.password}) 
        .then(res => { 
        this.uId = res.data.userInfo.uId
        localStorage.uId = res.data.userInfo.uId
        this.nickname = res.data.userInfo.nickname
        localStorage.nickname = res.data.userInfo.nickname 
        this.token = res.data.token
        localStorage.setItem("token", res.data.token)
        // console.log(res)
        data=res.data       
        })
        return data
    }
    @action verify(){
         Verify({token:this.token})
        .then(
            res=>{if(res.data.ms=="校验成功"){
                this.uId = res.data.decode.uId
                localStorage.setItem("uId", res.data.decode.uId)
                this.nickname = res.data.decode.nickname
                localStorage.setItem("nickname", res.data.decode.nickname)
                localStorage.nickname = res.data.decode.nickname
                console.log(res)}
            }
        )
    }
    @action changelist(data){
        this.list = data
    }
    @computed get fullName() {
        return this.list;
    }
}
   
export default new store()
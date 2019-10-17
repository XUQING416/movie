import React from 'react';
import store from "../xiao/store"
// import { BrowserRouter as Router,Route} from 'react-router-dom';
import { getmovies } from "./api"
import {getPosterlist} from "../Moviedetial/detailsApi"
import Moviedetial from "../Moviedetial/moviedetial"
import { withRouter} from "react-router-dom"
import { observer } from "mobx-react"
@withRouter
@observer
class Nowmovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     users:[],
      isLoaded:false
    }
  }
  
  componentDidMount() {
    console.log(1)
    getmovies()
    
      .then(res => {
   
        
        for(let i = 0;i<=res.data.movieList.length-1;i++)
        {
          // console.log(res.data.movieList[i].img)
          res.data.movieList[i].img = res.data.movieList[i].img.replace(/w.h/, "148.208")
          
        }
        console.log(store.list[0])
       if(store.list[0]==undefined){
        store.list = res.data.movieList}}
            

      
      
      )
      
      
  }
  
  handleclick(Id){
  
    
   
   store.id = Id
    localStorage.id = Id
    
    this.props.history.push("/moviedetial")
    
  }
  
  render() {
   
  
  const arr = store.list.map((item, index) => (<li key={item.id} className="M3-div1" >
  <img src={item.img} alt="" className="imgaa"/>
  <div  onClick={this.handleclick.bind(this,item.id)} className="M3-div2">
  <h3 className="M3-div2-h3">{item.nm}&nbsp;&nbsp;&nbsp;<span className="M3-div2-span" >{item.version}</span></h3>
  <p>&nbsp;&nbsp;&nbsp;观众评分：<span className="M3-div2-span2" >{item.sc}</span></p>
  <p>&nbsp;&nbsp;&nbsp;主演：{item.star}</p>
  <p>&nbsp;&nbsp;&nbsp;{item.showInfo?item.showInfo:""}</p>     
  </div>
  <button className="M3-btn">&nbsp;购 票&nbsp;</button> 
  </li>))
    
    return (
      // <Router>
     
      <div >
        <div>
          {arr} 
          </div>
      </div>


  )
    
  }
}
export default Nowmovies
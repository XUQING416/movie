import React from "react"
import './Movies.css';
import TabExample from "./M2"
import SouInput from "./Sou"
class Movies extends React.Component{


    render(){
        return (
            <div  className="Movies">
                <div className="Movies-header">
                    猫 眼 电 影
                </div>
                <SouInput />
                <div className="Movies-main">
                    <TabExample />
                </div>
            </div>
        )
    }
}
export default Movies
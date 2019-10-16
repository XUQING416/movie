import React from 'react';

import { getmov } from "./api"
import Willmovies2 from "./M5"

class Willmovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    getmov()

      .then(res => {
        // console.log(res);

        this.setState({
          users: res.data.coming,

          isLoaded: true
        });

      }

      )


  }


  render() {
    // console.log(this.state.users);
    const arr2 = this.state.users


    return (
      <div >

        <div className="M4-div1">
          <h3 className="M3-div2-h3">近期最受期待</h3>
          {arr2.map((item, index) => (<div key={index} className="M4-div2">
          <img src={[require("./img/3.jpg")]} alt="" className="imgaa"/>
            <p>{item.nm}&nbsp;&nbsp;&nbsp;<span className="M4-div2-span">{item.version}</span></p>
            <p>&nbsp;上映日：{item.comingTitle}</p>

          </div>))}
        </div>
        <Willmovies2 />
      </div>
    )

  }
}
export default Willmovies
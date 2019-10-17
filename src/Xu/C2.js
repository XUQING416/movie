import React from "react"
import { citya } from "./api"

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],

            isLoaded: false
        }
    }
    componentDidMount() {
        // console.log(1)
        citya()

            .then(res => {
                console.log(res.data);

                this.setState({
                    users: res.data.result,

                    isLoaded: true
                });

            })
    }


    render() {
        const arr1 = this.state.users

        return (
            <div>
                {arr1.map((item, index) => (<div key={index} className="C2-div1">
                    <p className="C2-div1-p">{item.province}</p>
                    <div className="C2">
                        {(arr1[index].city).map((item, index) => (<div key={index} className="C2-div2">
                            <span className="C2">{item.city}</span>
                        </div>))}
                    </div>
                </div>))}


            </div>
        )
    }
}
export default City
import React from "react";

export default class Review extends React.Component{
    constructor(props){
        super(props);
        this.state={
            reviewContent: props.Reviewcontent
        }
    }
    render(){
        return(
            <div className="card w-50">
                <div className="card-body">
                    {this.state.reviewContent}
                </div>
            </div>
        )
    }
}
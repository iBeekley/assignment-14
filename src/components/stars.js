import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
 
const ratingChanged = (newRating) => {
  console.log(newRating);
};
export default class ReviewForm extends React.Component{
    render(){
        return(
            <div className="mx-auto">
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"/>
            </div>
        )
    }
}
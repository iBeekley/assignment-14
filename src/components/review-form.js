import React from "react";

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        reviewText: ''
        };
    }

    handleUpdate = (event) => {
        this.setState({reviewText: event.target.value})
    }

    handleClick = () =>{
        const {reviewText} = this.state;
        const {movieId, setReviews} = this.props;

        if(reviewText.trim()){
            setReviews(prevReviews => [
                ...prevReviews, {movieId, review: reviewText}//adds review to already used array
            ]);
            this.setState({reviewText: ''}); //clearing input field
        }
    }

    render(){
        return(
        <div className = "card mx-auto mt-2">
            <div className = "card-body">
                <h5 className = "card-title">Leave a Review</h5>
                <form>
                    <input type='text' className = "form-control" placeholder = "Your Review here" value={this.state.reviewText} onChange={this.handleUpdate}></input>
                </form>
                <button type="submit" className="btn btn-primary mt-2" onClick={this.handleClick}>Submit</button> 
            </div>
        </div>
        )
    }
}
import React from "react";
import ReviewForm from "./review-form";
import ReviewList from "./review-list";
import Stars from './stars'

const Movie = ({ movie, reviews, setReviews }) => {
  const { id, content, thumbnail } = movie;

  return (
    <div className="card w-75">
      <div className="card-header bg-primary text-white">
        <h4>{content}</h4>
      </div>
      <div className="card-body">
        <img src={thumbnail} className="img-fluid img-thumbnail" alt={content} />
        <Stars />
      </div>
      <div className="card-footer">
        <ReviewForm movieId={id} reviews={reviews} setReviews={setReviews} />
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default Movie;

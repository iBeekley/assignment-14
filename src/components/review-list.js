import React from "react";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="list-group-item">
            <div className='card-body bg-white mt-3 border border-primary'>
                <p className="cardtext">{review.review}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to review!</p>
      )}
    </div>
  );
};

export default ReviewList;


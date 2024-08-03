import React, {useState} from "react";
import Movie from "./movie";
import Stars from "./stars";

export default function MovieList() {
    const [reviews, setReviews]  = useState([
        {
            movieId: 1,
            review: "This was a great movie"
        },{
            movieId: 2,
            review: "Jaba the hutt needs to learn to mind his buisness"
        },{
            movieId: 3,
            review: "Fantastic story with great acting... 10/10"
        },{
            movieId: 2,
            review: "First two were far better but still a classic!"
        }
    ])

    let movies = [
        {
            id: 1,
            content: 'Catch Me If You Can',
            thumbnail: 'https://m.media-amazon.com/images/I/61rkxjG4uiL._AC_UF1000,1000_QL80_.jpg' 
        },
        {
            id:2,
            content: 'Star Wars: Return of the Jedi',
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Wu7h_p70r9MFahDRcvxqfI_SbTq0ZDdeUQ&s'
        },
        {
            id: 3,
            content: 'Ford vs Ferrari',
            thumbnail: 'https://m.media-amazon.com/images/I/71ab5ieuSXL.jpg'
        }
    ]

   //hardcoded movies
        return(
            <div className="row">
                {movies.map((movie) => {
                return (
                    <div key={movie.id} className="col-sm">
                    <Movie movie={movie} reviews={reviews.filter(review => review.movieId === movie.id)} setReviews={setReviews}/>
                    </div>
                )
                })}
            </div>
        )
    }

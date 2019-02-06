// export let movies = [
//     {
//         id : 1,
//         name : "신과 함께",
//         score : 29,
//     },
//     {
//         id : 2,
//         name : "마담 뺑덕",
//         score : 12,
        
//     },
//     {
//         id : 3,
//         name : "그레이의 50가지 그림자",
//         score : 32
//     },
//     {
//         id : 4,
//         name : "어벤저스",
//         score : 33
        
//     },
//     {
//         id : 5,
//         name : "상류사회",
//         score : 23
    
//         },
//     {
//         id : 6,
//         name : "드래곤 길들이기",
//         score : 25
//     },
//     {
//         id : 7,
//         name : "왕좌의 게임 The movie",
//         score : 28
//     },
// ]

// export const getById = id => {
//     const filteredMovie = movies.filter(movie => movie.id === id);
//     return filteredMovie[0];
// }

// export const getMovie = () => movies;

// export const deleteMovie = (id) => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if(movies.length > cleanedMovies.length){
//         movies = cleanedMovies;
//         return true;
//     }else{
//         return false;
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id : movies[movies.length-1].id +1,
//         name,
//         score
//     }
//     movies.push(newMovie);
//     return newMovie;
// }

import axios from "axios";
const API_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${API_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${API_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${API_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    const {
        data : {
            data : {movies}
        }
    } = await axios(LIST_MOVIES_URL, {
        params : {
            limit,
            minimum_rating : rating
        }
    });
    return movies;
};

export const getMovie = async id =>{
    const {
        data: {
            data : {movie}
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params : {
            movie_id : id
        }
    });
    return movie;
}

export const getSuggestions = async id => {
    const {
        data : {
            data : {movies}
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params : {
            movie_id : id
        }
    });
    return movies;
}


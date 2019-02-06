// import {getMovie, getById, addMovie, deleteMovie} from "./db";
import {getMovies ,getMovie , getSuggestions} from "./db"
const resolvers ={
    Query : {
        movies : (_, {limit, rating}) => getMovies(limit, rating),
        movie : (_, {id}) => getMovie(id),
        suggestions : (_, {id}) => getSuggestions(id)
        // movie : (_, {id}) => getById(id)
    }
    // Mutation : {
    //     addMovie : (_, {name,score}) => addMovie(name, score),
    //     deleteMovie : (_, {id}) => deleteMovie(id)
    // }
};

export default resolvers;
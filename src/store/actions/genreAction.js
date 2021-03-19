// import axios from 'axios'

// export const fetchGenre = (data) =>{
//     const {genre} =data
//     dispatchEvent({type:"FETCHING_GENRE" ,fetching:true})
//     await axios (`https://api.jikan.moe/v3/search/anime?q=genre={genre}`)
//         .then(response =>{
//             const results = response.data.results
//             dispatch({ type :'MOVIE_GENRE', res})
//             dispatch({ type: 'SEARCH_GENRE', search})
//             dispatch({ type: 'FETCH_MOVIE', fetching: false})
            

//         })
//         .catch(e => {
//             // handle error
//             alert(e.response.data.message)
//             dispatch({ type: 'FETCHING_MOVIES', fetching: false })
//             return e;
//         })

        
// }
// export const resetMovies = () =>  (dispatch) => {
//     dispatch({ type: 'RESET_MOVIES', payload: [] })

// }
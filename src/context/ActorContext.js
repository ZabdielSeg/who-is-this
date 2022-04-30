import axios from 'axios';
import React, { createContext, useState } from 'react';

export const ActorContext = createContext();


const ActorContextProvider = props => {
    const [actorInfo, setActorInfo] = useState({});
    const [actorName, setActorName] = useState('');

    const getActorInfo = () => {
        if (actorName) {
            axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${actorName}&page=1&include_adult=true`)
                .then(response => {
                    setActorInfo(response.data.results[0]);
                })
                .catch(err => console.log(err));
        }
    };


    return (
        <ActorContext.Provider value={{ getActorInfo, setActorName, actorInfo }}>
            {props.children}
        </ActorContext.Provider>
    )
}

export default ActorContextProvider;
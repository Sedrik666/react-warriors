import React, { useState } from 'react';

const movie = {
    title: 'Avengers: Infinity War',
    vote_average: 8.5,
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg',
    overview: 'Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers'
};

const Image = (props) => <img {...props}/>;

const MovieItem = ({data:{title, vote_average, image, overview}}) => {
    //const [state, setState] = useState();
    return(
        <>
            <Image src={image} alt={title}/>
            <p>{title}</p>
            <p>{vote_average}</p>
        </>
    )
};

const App = () => <MovieItem data={movie}/>;

export default App;

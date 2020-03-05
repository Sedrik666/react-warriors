import React from 'react';

const MovieItem = ({title, vote_average}) => {
    return(
        <div>
            <p>{title}</p>
            <p>{vote_average}</p>
        </div>
    )
};

const App = () => {
  return (
    <div>
      <MovieItem title='titleNew' vote_average={10.0}/>
    </div>
  );
}

export default App;

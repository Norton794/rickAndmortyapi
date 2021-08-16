import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Eps } from './Eps';

export const Character = () => {
  const { id } = useParams();
  const api = "https://rickandmortyapi.com/api/character/" + id;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api).then(response => response.json()).then((json) => {
      //console.log(json.location.name);
      setData(json);
    });
  });

  return (
    <div className="all">
      <div className="">
        <div className="profile-image">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="profile-name">
          <h3>{data.name}</h3>
        </div>
        <div className="profile-status">
          {data.status} - {data.species}
        </div>
        <div className="profile-gender">
          Gender: {data.gender}
        </div>
        <div className="profile-origin">
          <span>Origin: </span>
          <a href={data.origin && data.origin.url}>{data.origin && data.origin.name}</a>
        </div>
        <div className="profile-location">
          <span>Location: </span>
          <a href={data.location && data.location.url}>{data.location && data.location.name}</a>
        </div>


        <div className="episodes">
            {data.episode && data.episode.map((r, i) => (
                    <Eps url={r} key={i}/>
            ))}
        </div>


        
      </div>
    </div>
  );
}
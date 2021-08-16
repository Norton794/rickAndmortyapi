import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const Character = () => {
    const { id } = useParams();
    const api = "https://rickandmortyapi.com/api/character/"+id;
    const [data, setData] = useState([]);

    useEffect(()=>{
    fetch(api).then(response => response.json()).then((json) => {
        //console.log(json.location.name);
      setData(json);
    });
  });

  return(
      <div>
        <div className="profile-image">
            <img src={data.image} alt={data.name}/>
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

    

        {/* <FirstEpisode episode={data.episode}/> */}
      </div>
  );
}
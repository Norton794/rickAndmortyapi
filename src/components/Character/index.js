import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Eps } from '../Eps/index';
import { API_CHARACTER } from '../../constants/index';
export const Character = () => {
  const { id } = useParams();
  const api = API_CHARACTER + id;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api).then(response => response.json()).then((json) => {
      setData(json);
    });


  }, [api]);


  return (
    <div className="all">
      <div className="profile">
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
          <span>Gender:</span>
          <p>{data.gender}</p>
        </div>
        <div className="profile-origin">
          <span>Origin: </span>

          <p> <Link to={`/location/${data.origin && data.origin.url.substring(41)}`}>{data.origin && data.origin.name}</Link></p>
        </div>
        <div className="profile-location">
          <span>Location: </span>

          <p><Link to={`/location/${data.location && data.location.url.substring(41)}`}>{data.location && data.location.name}</Link></p>
        </div>

        <p className="where">Episodes where it appeared:</p>
        <div className="episodes">
          {data.episode && data.episode.map((r, i) => (
            <Eps url={r} key={i} />
          ))}
        </div>



      </div>
    </div>
  );
}
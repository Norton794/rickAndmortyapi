import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function FirstEpisode({episode}) {
  const lnk = episode && episode[0];
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch(lnk).then(response => response.json()).then((json) => {
      setData(json);
    });

    

  }, [lnk]);

  let {id, name} = data;

  return (
    <div className="fE">
      <span>First seen in:</span>
      <p> <Link to={`episode/${id}`}>{name}</Link></p>
    </div>
  );
}
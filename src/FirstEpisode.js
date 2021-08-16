import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function FirstEpisode(props) {
  const lnk = props.episode && props.episode[0];
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch(lnk).then(response => response.json()).then((json) => {
      setData(json);
    });

    return(()=>{
      setData([]);
    });

  }, [lnk]);

  return (
    <div className="fE">
      <span>First seen in:</span>
      <p> <Link to={`episode/${data.id}`}>{data.name}</Link></p>
    </div>
  );
}
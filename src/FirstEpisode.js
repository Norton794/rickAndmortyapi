import React, { useState, useEffect } from 'react';
import './App.css';

export function FirstEpisode(props){
    const lnk = props.episode[0];
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(lnk).then(response => response.json()).then((json) => {
          console.log(json);
          setData(json);
        });
      });

    return(
        <div className="fE">
            <span>First seen in:</span>
            <p> <a href={data.url}>{data.name}</a></p>
        </div>
    );
}
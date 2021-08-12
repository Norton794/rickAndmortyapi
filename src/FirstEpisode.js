import React, { useState, useEffect } from 'react';
import './App.css';

export function FirstEpisode(props){

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(props.episode[0]).then(response => response.json()).then((json) => {
          setData(json);
        });
      }, []);

    return(
        <div className="fE">
            <span>First seen in:</span>
            <p> <a href={data.url}>{data.name}</a></p>
        </div>
    );
}
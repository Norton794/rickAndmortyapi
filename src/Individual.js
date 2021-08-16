import React, { useState, useEffect } from 'react';
import { FirstEpisode } from './FirstEpisode';

export function Individual(props) {

    const api = props.url;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(api).then(response => response.json()).then((json) => {
            setData(json);
        });
    });

    return (
        <div className="card">

            <img src={data.image} alt="" />

            <div className="card-text">
                <h3> {data.name} </h3>
            </div>

            <div className="sub-tittle">
                {data.status} - {data.species}
            </div>

            <div className="location">
                <span>Last Known Location:</span>
                <p> <a href={data.location && data.location.url}>{data.location && data.location.name}</a></p>
            </div>

            <FirstEpisode episode={data.episode}/>
        </div>
    );
}
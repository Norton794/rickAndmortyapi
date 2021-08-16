import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Eps(props) {

    const api = props.url;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(api).then(response => response.json()).then((json) => {
            setData(json);
        });
    });

    return (
        <div className="eps" >
            <Link to={`/episode/${data.id}`}>
                <div className="card-textx">
                    <h3>{data.name} </h3>
                </div>
            </Link>
            <div className="ep">
                <span>Episode: </span>
                <p>{data.episode}</p>
            </div>
            <div className="ep">
                <span>Aired in: </span>
                <p>{data.air_date}</p>
            </div>
        </div>
    );
}
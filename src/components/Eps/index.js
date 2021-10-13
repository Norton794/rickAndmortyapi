import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Eps({url}) {

    const api = url;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(api).then(response => response.json()).then((json) => {
            setData(json);
        }); 
    }, [api]);
    let {id, name, episode, air_date} = data;

    return (
        <div className="eps" >
            <Link to={`/episode/${id}`}>
                <div className="card-textx">
                    <h3>{name} </h3>
                </div>
            </Link>
            <div className="ep">
                <span>Episode: </span>
                <p>{episode}</p>
            </div>
            <div className="ep">
                <span>Aired in: </span>
                <p>{air_date}</p>
            </div>
        </div>
    );
}
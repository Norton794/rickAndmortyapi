import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Individual } from '../Individual';
import { API_EPISODE } from '../../constants/index';
export function Episode() {
    const { id } = useParams();
    const api = API_EPISODE+id;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(api).then(response => response.json()).then((json) => {
            setData(json);
        });

      

    });
    return (
        <div className="all">
            <h2>{data.name}</h2>
            <div className="ep">
                <span>Episode: </span>
                <p>{data.episode}</p>
            </div>
            <div className="ep">
                <span>Aired in: </span>
                <p>{data.air_date}</p>
            </div>

            <p className="where">CHARACTERS in the EPISODE:</p>

            <div className="cards">
            {data.characters && data.characters.map((r, i) => (
                    <Individual url={r} key={i}/>
                ))}
            </div>

        </div>
    );
}
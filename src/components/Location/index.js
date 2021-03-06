import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Individual } from '../Individual';
import { API_LOCATION } from '../../constants/index';
export function Location() {
    const { id } = useParams();
    const api = API_LOCATION + id;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(api).then(response => response.json()).then((json) => {
            setData(json);
        });

       
    });
    return (
        <div className="all">
            <h2>{data.name}</h2>
            <div className="cards">
                {data.residents && data.residents.map((r, i) => (
                    <Individual url={r} key={i} />
                ))}
            </div>

        </div>
    );
}
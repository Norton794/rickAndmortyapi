import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_LOCATION } from '../../constants/index';

export function Locations() {
    const [resource, setResource] = useState(API_LOCATION);
    const [data, setData] = useState([]);
    const [pag, setPag] = useState({});
    const [pagination, setPagination] = useState(1);

    useEffect(() => {
        fetch(resource).then(response => response.json()).then((json) => {
            setData(json.results);
            setPag(json.info);
        });

        
    });

    const handleClickFirst = () => {
        setResource(API_LOCATION);
        setPagination(1);
    }


    const handleClickLast = () => {
        let str = API_LOCATION + "/?page=" + pag.pages;
        setResource(str);
        setPagination(pag.pages);
    }

    const handleForward = () => {
        setResource(pag.next);
        setPagination(pagination + 1);
    }

    const handleBack = () => {
        setResource(pag.prev);
        setPagination(pagination - 1);
    }

    return (
        <div className="all">
            <div className="locations">
                {data.map((d) => (
                    <div className="loc" key={d.id}>
                        <Link to={`/location/${d.id}`}>
                            <div className="card-textx">
                                <h3>{d.name}</h3>
                            </div>
                        </Link>
                        <div className="loc-type">
                            <span>Type: </span>
                            <p>{d.type}</p>
                        </div>
                        <div className="loc-type">
                            <span>Dimension: </span>
                            <p>{d.dimension}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <a href="#all" onClick={handleClickFirst}>&laquo;</a>
                <a href="#all" style={{ display: pag.prev ? "block" : "none" }} onClick={handleBack}>{pagination - 1}</a>
                <a href="#all" className="active">{pagination}</a>
                <a href="#all" style={{ display: pag.next ? "block" : "none" }} onClick={handleForward}>{pagination + 1}</a>
                <a href="#all" onClick={handleClickLast}>&raquo;</a>
            </div>
        </div>
    );
}
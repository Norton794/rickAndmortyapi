import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_EPISODE } from '../../constants/index';
export function Episodes(){
    
    const [resource, setResource] = useState(API_EPISODE);
    const [data, setData] = useState([]);
    const [pag, setPag] = useState({});
    const [pagination, setPagination] = useState(1);

    useEffect(()=>{
        fetch(resource).then(response => response.json()).then((json) => {
        setData(json.results);
        setPag(json.info);
        });

       
    }, [resource]);

    const handleClickFirst = () =>{
    setResource(API_EPISODE);
    setPagination(1);
  }
  

  const handleClickLast = () =>{
    let str = API_EPISODE +"/?page="+pag.pages;
    setResource(str);
    setPagination(pag.pages);
  }

  const handleForward = () =>{
    setResource(pag.next);
    setPagination(pagination + 1);
  }

  const handleBack = () =>{
    setResource(pag.prev);
    setPagination(pagination - 1);
  }

  return(
    <div className="all">
        <div className="episodes">
            {data.map((d)=> (
                <div className="eps" key={d.id}>
                <Link to={`/episode/${d.id}`}>
                <div className="card-textx">
                    <h3>{d.name} </h3>
                </div>
                </Link>
                <div className="ep">
                    <span>Episode: </span>
                    <p>{d.episode}</p>
                </div>
                <div className="ep">
                    <span>Aired in: </span>
                    <p>{d.air_date}</p>
                </div>
                </div>
            ))}
        </div>
        <div className="pagination">
            <a href="#all" onClick={handleClickFirst}>&laquo;</a>
            <a href="#all" style={{display: pag.prev ? "block" : "none" }} onClick={handleBack}>{pagination - 1}</a>
            <a href="#all" className="active">{pagination}</a>
            <a href="#all" style={{display: pag.next ? "block" : "none" }} onClick={handleForward}>{pagination + 1}</a>
            <a href="#all" onClick={handleClickLast}>&raquo;</a>
        </div>
    </div>
);
}
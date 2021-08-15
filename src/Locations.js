import React, { useState, useEffect } from 'react';
import './App.css';

export function Locations(){
    const api = "https://rickandmortyapi.com/api/location";
    const [resource, setResource] = useState(api);
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
    setResource(api);
    setPagination(1);
  }
  

  const handleClickLast = () =>{
    let str = api +"/?page="+pag.pages;
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
            <div className="locations">
                {data.map((d, index)=> (
                    <div className="loc" key={index}>
                    <a href="#!">
                    <div className="card-textx">
                        <h3>{d.name}</h3>
                    </div>
                    </a>
                    <div className="sub-tittle">
                    <span>Type:</span>
                        {d.type}
                    </div>    
                        
                        <p>Dimension: {d.dimension}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <a href="#title" onClick={handleClickFirst}>&laquo;</a>
                <a href="#title" style={{display: pag.prev ? "block" : "none" }} onClick={handleBack}>{pagination - 1}</a>
                <a href="#title" className="active">{pagination}</a>
                <a href="#title" style={{display: pag.next ? "block" : "none" }} onClick={handleForward}>{pagination + 1}</a>
                <a href="#title" onClick={handleClickLast}>&raquo;</a>
            </div>
        </div>
    );
}
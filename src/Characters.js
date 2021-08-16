import React, { useState, useEffect } from 'react';
import './App.css';
import {FirstEpisode} from './FirstEpisode';
import { Link} from 'react-router-dom';
export function Characters() {
    const api = "https://rickandmortyapi.com/api/character";

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

  let str = "/character/";

  return(
    <div className="all" id="all">
    <div className="cards">
    {data.map((d, index)=> (
      <div className="card" key={index}>
        
          <img src={d.image} alt="" />
          <Link to={str + d.id}>
          <div className="card-text">
            <h3> {d.name} </h3>
          </div>
          </Link>
          <div className="sub-tittle">
          {d.status} - {d.species}
          </div>

          <div className="location">
            <span>Last Known Location:</span>
            <p> <Link to={`/location/${d.location.url.substring(41)}`}>{d.location.name}</Link></p>
          </div>

          <FirstEpisode episode={d.episode}/>

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
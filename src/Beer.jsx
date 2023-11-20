import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Beer = () => {
    const [beer, setBeer] = useState([])
    const params = useParams()
    
    const getBeer = () =>{
        fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then(response=> response.json())
        .then(data => setBeer(data[0]))
    }

    const navigate = useNavigate()

    useEffect(()=>{
        getBeer()
    },[])
   
    console.log(beer);
  
    const handleBack = () => {
        navigate(-1)
    }
  
  return (
    <div className='lala'>
        <h2>Cerveza numero {beer.id}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={handleBack}>Go back</button>
    </div>

  )
}

export default Beer
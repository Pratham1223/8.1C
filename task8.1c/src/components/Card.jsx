import React from 'react'
import './Card.css'
const Card = (props) =>
{

    return <div className='column'>
    <img src={props.avatar} alt="staff" />
    <h2>{props.name}</h2>
    <h4>{"Description: " +props.description}</h4>
    <div className='single'>
    <p>{props.rating + "⭐"}</p>
    <h3>{props.Authorname}</h3>
    </div>
    </div>
}

export default Card
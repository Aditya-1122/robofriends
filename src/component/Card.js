import React from 'react'
import './Card.css'


const Card=(props)=>{
    const {id,nn,email}=props
    return(
        <div className="card">
        <div>
         <img alt="robot" src={`https://robohash.org/${email}testj?200x200`}/>
         <h2>{nn}</h2>
         <p>{email}</p>
         
        </div>
        </div>
    )


}
export default Card;
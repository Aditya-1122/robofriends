import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList=({robs})=>
{
    const cardComponent = robs.map((user,i) => 
    {
        return  <Card 
        key={i} 
        id={robs[i].id}
        nn={robs[i].name} 
        email={robs[i].email}/>
    })
  return(
      <div className="grd">{cardComponent}</div>
  
  
 )
}
export default CardList;
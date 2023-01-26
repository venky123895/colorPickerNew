import React from 'react'
import Item from './Item'
import './itemContainer.css'

function ItemList() {
    const coloursArray=['#ffa500','#ff0000','#0000ff','#3cb371','#ee82ee','#ffa500','#6a5acd'];
    
  return (
   <div className='ItemContainer'>
    {coloursArray.map((item)=>{
      return <Item colorName = {item}></Item>
    })}
   </div>
  )
}

export default ItemList

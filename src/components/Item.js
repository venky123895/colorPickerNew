import React from 'react'
import './item.css'
function Item(props) {
  return (
    <div className='ItemBox' style={{'backgroundColor':props.colorName}}>
      {props.colorName}
      
    </div>
  )
}

export default Item

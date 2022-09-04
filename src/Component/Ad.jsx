import React from 'react'



const Ad = ({product , price , color , h , w ,image}) => {
  return (
    <div className={'box'}>
    <img src={image} alt="" height={h} width={w} className={'img'}  />
    <div style={{fontSize:"26px"  }} className="name">{product}</div>
    <div className='price'>{price}</div>
    <button style={{backgroundColor:color, color:"#ffffff"}} className="btn">BUY NOW</button> 
    </div>
  )
}

export default Ad
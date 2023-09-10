import React from 'react'
import '../css/PostCard.css'

function PostCard(props) {

  return (
    <>
        <p className='Space'></p>
        <div className='Card'>
            <h2 className='quote'>{props.quote}</h2>
            <h3 className='author'>- {props.author} -</h3>
        </div>
    </>
    
  )
}

export default PostCard
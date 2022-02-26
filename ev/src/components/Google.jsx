import React from 'react'

export const Google=()=>{
    const handlechange=()=>{
        
    }
   return( 
    <>
    <div className="tag">
    <h1>Google</h1>
    <div className="search-box">
    <input type="text" placeholder='Search google' onChange={handlechange}/>
    </div>
    </div>
    </>
   )
}
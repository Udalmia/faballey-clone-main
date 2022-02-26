import React from 'react'
import { useEffect,useState } from 'react'
import "./Search.css"
import axios from "axios"
export const Search=()=>{

    const [text,setText] = useState("");
    const[text1,setText1] = useState("");
    const handle=(e)=>{
        setText(e.default.target)
    }
    
        useEffect(() => {
            async function getData(){
                const res = await axios.get(`http://localhost:3001/search?q=${text}`)
              console.log(res);
              
            
            };
          getData();
        }, [])
       
    
    return(
<div className="navbar" id="navbar">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"/>
<input type="text" onChange={handle} />
<button className="search">Search</button>
</div>
    )


}
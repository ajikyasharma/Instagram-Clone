import React, { useEffect, useState } from 'react'
import PostCards from './PostCards'
// import PostCards1 from './PostCards1'

function Home() {

  const [data, setData]= useState([])
     console.log(data)

  useEffect(()=>{
     
    fetch('http://localhost:3000/allposts',{
       headers :{
        "Authorization" :"Bearer "+ localStorage.getItem("jwt"),
        "Content-Type" :"application/json"
       }
    })
    .then(res=>res.json())
     .then(result => {
           setData(result)
          
     })
  },[])

  return <div >
   <div className='md:container md:mx-auto  px-5 lg:px-10 flex flex-col  items-center' >

     {
      data.map((item,idx) => (
       
        <PostCards item={item} key={idx}/>
      ))
     }

          {/* <PostCards />
          <PostCards />
          <PostCards1 />
          <PostCards /> */}

    </div>

    </div>
    

  
}

export default Home
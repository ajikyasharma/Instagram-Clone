import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserProfile() {
   
  const [data, setData]= useState([])
  const [name,setName] = useState('')
  const {userid} = useParams()



//   useEffect(()=>{
  
//     fetch('http://localhost:3000/myposts',{
//        headers :{
//         "Authorization" :"Bearer "+ localStorage.getItem("jwt"),
//         "Content-Type" :"application/json"
//        }
//     })
//     .then(res=>res.json())
//      .then(result => {
//            setData(result.myposts)
          
//      })
//       .catch(err=>{
//         console.log("Error", err)
//       })

//   },[])


useEffect(()=>{
     fetch(`http://localhost:3000/user/${userid}`,{
        method:"get",
        headers:{
            "Content-type": "application/json",
            "Authorization" :"Bearer "+localStorage.getItem("jwt")
        }
     })
     .then(res=>res.json())
     .then(result =>{
    
        setData(result.posts)
        setName(result.user.name)
        
     })
     .catch(err=>{
        console.log("Error", err)
     })
},[])




  return (
    <div className='md:container md:mx-auto  px-5 lg:px-10 flex flex-col  items-center'>
        <div className='flex flex-row m-2 mr-2'>
          <div>
              <img className='rounded-full h-24 md:h-48 lg:h-56 w-24 md:w-48 lg:w-56 ' src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" />
          </div>
          <div className='flex flex-col m-5 mt-1  justify-center'>
            <p className=' text-lg md:text-2xl lg:text-3xl  md:pb-2  md:pl-2'>{name}</p>
             <div className='flex flex-row '>
              <p className='text-md md:text-xl m-1 md:m-2'>{data.length} Posts</p>
              <p className='text-md md:text-xl m-1 md:m-2'>40 Followers</p>
              <p className='text-md md:text-xl m-1 md:m-2'>40 Following</p>
             </div>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4 mt-5'>

         {
          data.map((item, idx)=>(
                <img className='h-48' src={item.photo} />
          ))
         }


        </div>
   
    </div>
  )
}

export default UserProfile
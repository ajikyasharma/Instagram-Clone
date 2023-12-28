import React, { useEffect, useState } from 'react'
import { ChatBubbleOvalLeftIcon, HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import { useAsyncError } from 'react-router-dom'

function PostCards({item}) {
       console.log(item)
          const user_id=  JSON.parse(localStorage.getItem("user"))._id
          

       const [likes, setLikes]= useState(0)
       const [post, setPost]= useState(item)

       const likePost =(id)=>{
           fetch('http://localhost:3000/like', {
              method:"put",
              headers:{
                "Authorization" :"Bearer "+ localStorage.getItem("jwt"),
                "Content-Type" :"application/json"
              },
              body:JSON.stringify({
                postId:id
              })
           }).then(res=>res.json())
           .then(result=>{
               setPost(result)
           })
       }


       const unLikePost =(id)=>{
        fetch('http://localhost:3000/unlike', {
           method:"put",
           headers:{
             "Authorization" :"Bearer "+ localStorage.getItem("jwt"),
             "Content-Type" :"application/json"
           },
           body:JSON.stringify({
             postId:id
           })
        }).then(res=>res.json())
        .then(result=>{
            setPost(result)
        })
    }

    useEffect(()=>{
              
      setLikes(post.likes.length)
    },[post])


  return (
    <div className=' h-full mx-5  border-2 p-3 pb-5 my-5'>
    <p className='my-2  text-2xl'>{item.postedBy.name}</p>
    <div >
      <img width={600} src={post.photo} />
    </div>
    <div className='my-1 flex flex-row'>
    <HeartIcon  className='text-red-500 h-10 w-10 cursor-pointer'/>
    { !post.likes.includes(user_id)?  <HandThumbUpIcon className='h-10 w-10 pl-2 cursor-pointer' onClick={()=>likePost(item._id)}/> :    <HandThumbDownIcon className='h-10 w-10 pl-2 cursor-pointer' onClick={()=>unLikePost(item._id)} />}
   

    </div>

     <p className='mt-1  text-xl'>{likes} likes</p>
    <p className='mt-1  text-xl'>{item.title}</p>
    <p className='mt-1  text-lg'>{item.body}</p>
    <form className='my-1'>
      <input type="text" className='w-4/6 h-10 bg-transparent border-b-2  p-2 outline-none ' placeholder="Add your Comment" />
      <input type="submit" className='ml-2 bg-pink-500 h-10 p-2 text-white rounded-lg cursor-pointer' value="Comment" />
    </form>
  </div>
  )
}

export default PostCards
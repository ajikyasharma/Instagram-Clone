import React from 'react'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'

function PostCards({item}) {
       
  console.log("hi")
      console.log(item)
  return (
    <div className=' h-full mx-5  border-2 p-3 pb-5 my-5'>
    <p className='my-2  text-2xl'>{item.postedBy.name}</p>
    <div >
      <img width={600} src={item.photo} />
    </div>
    <div className='my-1 flex flex-row'>
    <HeartIcon  className='text-red-500 h-10 w-10 cursor-pointer'/>
    <ChatBubbleOvalLeftIcon className='h-10 w-10 pl-2 cursor-pointer' />
    </div>
    
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
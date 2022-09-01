import React from 'react'
import moment from 'moment'
import Link from "next/link"



const PostCard = ({post}) => {
  
    
  return (
    <>
    <h1 className="text-2xl font-bold " >{post.title}</h1>
    <h1>Author: {post.author.name}</h1>
    <p>Summary: {post.excerpt} </p>
    <img
    src= {post.featuredImage.url}
    alt="something"
    className= "w-full"
    />
    
    
    </>
  )
}

export default PostCard
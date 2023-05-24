import React from 'react'
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import{UserAuth, usetAuth} from "../context/AuthContext"
import {db} from "../firebase"
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movies = ({m}) => {
    const[like,setLike]=useState(false)
    const[saved,setSave]= useState(false)
    const {user}= UserAuth()

    const movieId = doc(db,"users",`${user?.email}`)

   async function setMovie(){
      if(user?.email){
        setLike(!like)
        setSave(true)
        await updateDoc(movieId,{
          savedShows:arrayUnion({
            id:m.id,
            title:m.title,
            img: m.backdrop_path
          })
        })
      }else{
        alert("please log in to saved a movie")
      }
    }
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img  className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${m?.backdrop_path}`} alt={m.title} />
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{m.title}</p>
        <p onClick={setMovie}>{like?<FaHeart size={25}  className='absolute top-4 left-4 text-red-500'/>:<FaRegHeart size={25}  className='absolute top-4 left-4 text-gray-300'/>}</p>
    </div>
</div>
  )
}

export default Movies
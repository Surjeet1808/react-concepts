import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
export const Show = () => {
    const [data, setData] = React.useState([])

   useEffect(() => {
        axios.get('https://instra.onrender.com/data')
        .then((res)=>{setData(res.data)})
        .catch((err)=>{console.log(err)});

   }, [])
  return <>
   
      <div className='w-[100%] flex flex-col gap-4 justify-center items-center p-5'>
              {
                data.map((el,idx)=>{
                    return <div key={idx} className='flex flex-col gap-4 bg-green-200 font-semibold justify-center items-center p-2 rounded w-[50%]'>
                         <p>username: {el.name}</p>
                         <p>password: {el.password}</p>
                    </div>
                })
              }
      </div>
  
  </>
}

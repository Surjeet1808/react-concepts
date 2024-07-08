import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck,faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Problem() {
  return <>
  <div className='flex'>
        <div className='w-[50%] p-10 rounded-lg flex justify-between'>
             <div className='w-full flex justify-center items-center'>
                   <div className='flex flex-col py-10 px-8 border-8  border-t-orange-500 border-s-green-500 border-e-red-500 border-b-transparent rounded-full'>
                        <div className='flex items-end'>
                          <p className='text-2xl font-semibold'>681</p>
                          <p>/3214</p>
                        </div>
                        <div className='relative flex items-center gap-1'>
                           <FontAwesomeIcon icon={faCheck} style={{color: "#03fc35",}} />
                           <p>solved</p>
                           <p className='absolute top-10 text-xs'>55 Attempting</p>
                        </div>
                   </div>
             </div>

             <div className=' flex p-2 flex-col gap-4 '>
                     <div className='flex flex-col justify-center items-center bg-zinc-300 py-1 px-4  rounded-lg'>
                            <p className='text-green-500 font-medium'>Easy</p>
                            <p>285/810</p>
                     </div>
                     <div className='flex flex-col justify-center items-center  bg-zinc-300 py-1 px-4 rounded-lg'>
                            <p className='text-orange-500 font-medium'>Med.</p>
                            <p>285/810</p>
                     </div>
                     <div className='flex flex-col justify-center items-center  bg-zinc-300 py-1 px-4 rounded-lg'>
                            <p className='text-red-500 font-medium'>Hard</p>
                            <p>285/810</p>
                     </div>
             </div>
      </div> 

      <div className='w-[50%] p-10'>
             <div className='flex justify-between'>
                  <div className='flex flex-col items-center justify-center'>
                       <p className='text-sm'>Badges</p>
                       <p className='text-xl font-medium'>12</p>
                  </div>
                  <div>
                       <FontAwesomeIcon icon={faArrowRight} /> 
                  </div>
             </div>
             <div className='flex justify-center'>
                  <div className='w-[25%]'>
                        <img src="https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png" alt="" />
                  </div>
                  <div className='w-[40%] flex justify-center'>
                        <img src="https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png" alt="" /> 
                  </div>
                  <div className='w-[25%]'>
                        <img src="https://assets.leetcode.com/static_assets/marketing/lg50.png" alt="" /> 
                  </div>
             </div>
             <div>
                  <p className='text-sm'>Most Recent Badge</p>
                  <p className='font-normal'>100 Days Badge 2024</p>
             </div>
      </div>

</div>
  </>
}

export default Problem
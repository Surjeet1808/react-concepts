import React from 'react'
import Contest from './Contest'
import Activity from './Activity'
import Problem from './Problem'
import RecentSolved from './RecentSolved'
function Main() {
  return <>
      <div className='p-4 flex flex-col gap-4'>
         <div className='bg-red-100'><Contest/></div>
         <div className='bg-red-100'><Activity/></div>
         <div className='bg-red-100'><Problem/></div>
         <div className='bg-red-100'><RecentSolved/></div>
      </div>
  </>
}

export default Main
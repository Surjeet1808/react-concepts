import React from 'react'
import Userinfo from './UserInfo'
import Community from './Community'
import Languages from './Languages'
import Skills from './Skills'
function Sidebar() {
  return <>
    
    <div className='p-4 flex gap-4 flex-col'>
      <div className='bg-red-100'><Userinfo/></div>
      <div className='bg-red-100'><Community/></div>
      <div className='bg-red-100'><Languages/></div>
      <div className='bg-red-100'><Skills/></div>
    </div>

  </>
}

export default Sidebar
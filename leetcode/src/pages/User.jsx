import React from 'react'
import Sidebar from '../components/User/Sidebar/Sidebar'
import Main from '../components/User/Main/Main'
function User() {
  return <>
  <div className='flex p-3 bg-red-100'>
      
         <div className='w-1/3 m-2 bg-green-100 rounded-lg'>
            <Sidebar/>
        </div>

        <div className='w-full m-2 bg-green-100 rounded-lg'>
            <Main/>
        </div>

  </div>
  </>
}

export default User
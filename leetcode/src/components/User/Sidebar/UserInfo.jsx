import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNfcSymbol} from '@fortawesome/free-brands-svg-icons'

function UserInfo() {
  return <>
     <div>
        <div className='flex'>
          <div className='w-1/3 h-fit rounded-lg overflow-hidden'>
            <img src="https://wallpapers-clan.com/wp-content/uploads/2022/12/death-note-light-yagami-pfp-6.jpg" alt="" />
          </div>
          <div className='ps-4 pt-1 pb-1'>
            <p className='font-semibold'>Surjeet Dhakad</p>
            <p className='text-sm'>surjeetdhakad8</p>
            <div className='mt-5 flex'>
                <p>Rank </p>
                <p className='font-semibold ms-1 '>48,229</p>
            </div>
          </div>
        </div>
        <div className='pt-2'>
          <button className='w-full px-2 py-1 bg-green-200 font-semibold text-green-500 rounded-lg'>Edit Profile</button>
        </div>
    </div>
  </>
}

export default UserInfo
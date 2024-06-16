import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import {faFire} from '@fortawesome/free-solid-svg-icons'
function Navbar(){
   return (
   <div className="w-full h-[3rem] bg-zink-200 px-10 py-[2rem] flex justify-between border-b">

         <div className="flex items-center">

            <div className=" w-[2.5rem] rounded-full overflow-hidden">
              <img src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="" />
            </div>

            <div className="h-full w-fit flex justify-center items-center mx-1 gap-4">
            <a className="text-lg" href="">Explore</a>
            <a className="text-lg" href="">Contest</a>
            <a className="text-lg" href="">Problems</a>
            <a className="text-lg" href="">Discuss</a>
            <a className="text-lg" href="">Interview</a>
            <a className="text-lg" href="">Store</a>
            </div>

         </div>
         <div className="h-full w-fit flex justify-center items-center mx-1 gap-4">
            <div>
            <FontAwesomeIcon icon={faBell}  />
            </div>
            <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faFire} style={{color:"#f97316"}}/>
            <span className="text-orange-500 font-semibold">229</span>
            </div>
            <div className=" w-[2rem] rounded-full overflow-hidden">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp&w=256" alt="" />
            </div>
            <div className="px-2 py-1 rounded-lg bg-orange-100">
                <p className="text-orange-500">Premium</p>
            </div>
         </div>

   </div>
   )
}

export default Navbar;
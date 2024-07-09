import React from "react";
import { NavLink } from "react-router-dom";
function Footer(){
   return <>
         <div className=" px-5 pt-4 flex justify-between items-center">
              <div className="w-[65%] flex justify-between items-center">
                  <p>Copyright © 2024 LeetCode</p>
                  <NavLink>Help Center</NavLink>
                  <NavLink>Bug boundry</NavLink>
                  <NavLink>Jobs</NavLink>
                  <NavLink>Assisment</NavLink>
                  <NavLink>Students</NavLink>
                  <NavLink>Terms</NavLink>
                  <NavLink>Privacy Policy</NavLink>
              </div>
              <div className="flex justify-center items-center">
                   <div className="w-7"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCd1fGBp5MajT0SL0dMPszdEOyqV3kijXtFPmx8L4-P-M_89w7m4vcOVJskm2O88PMOU&usqp=CAU" alt="" /></div>
                   <p>United States</p>
              </div>
         </div>
   </>
}

export default Footer;
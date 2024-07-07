import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRectangleList} from '@fortawesome/free-regular-svg-icons'
function RecentSolved() {
  const data=[
    {problem:"Add nums", Hrs_before:10},
    {problem:"Multiply Arrays", Hrs_before:20},
    {problem:"Distribute price", Hrs_before:30},
    {problem:"Alternating group", Hrs_before:40},
    {problem:"Find Area", Hrs_before:50},
    {problem:"Matrix mulriply", Hrs_before:60},
    {problem:"HCF of Array", Hrs_before:80},
    {problem:"4 sum", Hrs_before:90},
    {problem:"3 Sum", Hrs_before:100},
    {problem:"Play Game", Hrs_before:110},
    {problem:"Counting Sort", Hrs_before:120},
    {problem:"Arrange nums", Hrs_before:130},
    
  ]
  return <>
    <div className='p-4'>
           
          <div>
               <div className='flex items-center gap-1 text-lg'>
               <FontAwesomeIcon icon={faRectangleList} />
               <p>Recent AC</p>
               </div>
          </div>
          

           <div className='mt-2'>
            {data.map((el,idx)=>{
              return <div key={el.problem} className={`flex items-center justify-between py-4 px-2 ${idx%2==0?"bg-green-100":""} rounded-lg`}>
                <p>{el.problem}</p>
                <p>{el.Hrs_before>=24?`${Math.floor(el.Hrs_before/24)} days ago`:`${el.Hrs_before} hrs ago`}</p>
              </div>
 
            })}
           </div>

    </div>
    </>
}

export default RecentSolved;
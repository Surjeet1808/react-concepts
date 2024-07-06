import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye,faSquareCheck,faMessage,faStar} from '@fortawesome/free-solid-svg-icons'
function Community() {
    const data = [
        {icon: <FontAwesomeIcon icon={faEye} style={{color: "#3aa9fd",}} />, title: "Views",Value:34,Lastweek:25},
        {icon: <FontAwesomeIcon icon={faSquareCheck} style={{color: "#74C0FC",}} />, title: "Solution",Value:6,Lastweek:1},
        {icon: <FontAwesomeIcon icon={faMessage} style={{color: "#63E6BE",}} />, title: "Discuss",Value:0,Lastweek:0},
        {icon: <FontAwesomeIcon icon={faStar} style={{color: "#ffae00",}} />, title: "Reputation",Value:3,Lastweek:1},
    ]
  return<>
    <div>
        <p className='font-semibold text-lg mb-1'>Community States</p>
        <div className='px-2'>
            {data.map((el)=>{
                return <div className='my-2'>
                    <div className='flex gap-1 items-center'>
                        {el.icon}
                        <p>{el.title} {el.Value}</p>
                    </div>
                    <p className='ps-4 text-sm'>Last Week {el.Lastweek}</p>
                </div>
            })}
        </div>
    </div>
    </>
}


export default Community
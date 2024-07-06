import React from 'react'

function Languages() {
    const data=[
        {
        language:"java",
        problems:651,
       },
       {
        language:"javascript",
        problems:14,
       },
       {
        language:"c++",
        problems:1,
       },
       {
        language:"SQL",
        problems:0,
       }
];
  return <>
  
    <div>
        <p className='font-semibold text-lg mb-1'>Languages</p>
        {data.map((el)=>{
            return <div className='flex justify-between p-1'>
                <p className='bg-green-100 rounded-full px-2'>{el.language}</p>
                <p className=' '>{el.problems} problems solved</p>
            </div>
        })}
    </div>

  </>
}

export default Languages
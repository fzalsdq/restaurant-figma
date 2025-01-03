import Image from 'next/image'



import React from 'react'

const signup = () => {
  return (
    <div>
      
<div className='Signup-Form w-[424px] h-[624px] mt-[430px] ml-[743px] bg-[#ffffff]  border-blue-400 border-4 shadow-2xl absolute'>
<span className='Signup-text text-blue-400 text-center ml-[170px] mt-[40px] p-4 border-2 absolute'>Sign Up</span>


            <label htmlFor="Name " className='Name-text  mt-[160px] ml-[75px] font-bold text-sm text-gray-600 absolute' >Name:</label>
            <input type="text" id="firstName" name="Name" className='Name-box  w-[360px] h-[44px] mt-[150px] ml-[30px] border-2 shadow-md  '></input>
            <Image className="image-68  mt-[-150px] ml-[30px] rotate-4   opacity-20 absolute " src="/images/image 68.png" width={360.82} height={354.27} alt="pict-8926"/> 
                        
            <Image className="image-68  mt-[-38px] ml-[40px]   opacity-20 absolute " src="/images/user.png" width={24} height={24} alt="pict-8926"/> 

            <label htmlFor="Name " className='Name-text  mt-[290px] ml-[-320px] font-bold text-sm text-gray-600 absolute' >Password:</label>
            <input type="text" id="firstName" name="Name" className='Name-box  w-[360px] h-[44px] mt-[20px] ml-[30px] border-2 shadow-md  '></input>
                        
            <Image className="image-68  mt-[-38px] ml-[40px]   opacity-20 absolute " src="/images/EnvelopeSimple.png" width={24} height={24} alt="pict-8926"/> 

            <label htmlFor="Name " className='Name-text  mt-[30px] ml-[-320px] font-bold text-sm text-gray-600 absolute' >Email:</label>
            <input type="text" id="firstName" name="Name" className='Name-box  w-[360px] h-[44px] mt-[20px] ml-[30px] border-2 shadow-md  '></input>
                         
            <Image className="image-68  mt-[-38px] ml-[40px]   opacity-20 absolute " src="/images/Lock.png" width={24} height={24} alt="pict-8926"/> 

<div className='remeber-box w-[129px] h-[22px] mt-4 ml-8 border-2'>
  <span className='remember-text w-[101px] h-[22px] ml-6 text-normal text-gray-700 text-sm  '  >Remember me?</span>
  <Image className="image-68  mt-[-23px] ml-[1px] absolute " src="/images/Check.png" width={20} height={20} alt="pict-8926"/> 

  <span className='signup-text w-[360px] h-[44px] mt-10 ml-[-130px] text-center text-gray-700 text-sm  bg-[#FF9F0D] border-4 absolute'><span className='signup-text2 ml-[-20px] mt-2 text-white absolute'>Sign Up</span></span>
  <span className='signup-text2 ml-[110px] mt-20 text-sm text-gray-600  absolute'>Forgot Password?</span>

</div>

<div className='Google-box w-[360px] h-[152px] text-white mt-20 ml-8 border-2'>
<span className='OR bg-gray-200 ml-40 mt-[-13px] text-sm text-gray-600 border-2 absolute' >OR</span>

<label htmlFor="Name " className='Name-text  mt-[35px] ml-32 font-bold text-sm text-center text-gray-600 absolute' >Sign up with Google</label>
            <input type="text" id="firstName" name="Name" className='Name-box  w-[360px] h-[44px] mt-[24px] ml-[-2px] border-blue-200 border-2  '></input>     
            <Image className="image-68  mt-[-36px] ml-[2px]    absolute " src="/images/Google.png" width={24} height={24} alt="pict-8926"/> 
            
            <label htmlFor="Name " className='Name-text  mt-[35px] ml-32 font-bold text-sm text-center text-gray-600 absolute' >Sign up with Apple</label>
            <input type="text" id="firstName" name="Name" className='Name-box  w-[360px] h-[44px] mt-[24px] ml-[-2px] border-blue-200 border-2  '></input>             
            <Image className="image-68  mt-[-36px] ml-[2px]    absolute " src="/images/Apple.png" width={24} height={24} alt="pict-8926"/> 



</div>
</div>


    </div>
  )
}

export default signup

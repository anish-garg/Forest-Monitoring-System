import {
    BiLogoFacebookCircle,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiLogoYoutube,
  } from "react-icons/bi";
const Footer = () => {
  return (
    <div className='whole footer mx-60 mt-8'>
        <div className='flex justify-between'>
           <div className='flex gap-5 '> 
           <h3 className='text-lg hover:underline cursor-pointer' >
            Map
           </h3>
           <h3  className='text-lg hover:underline cursor-pointer'>
            Dashboard
           </h3>
           <h3 className='text-lg hover:underline cursor-pointer'>
            Newsletter
           </h3>
           <h3 className='text-lg hover:underline cursor-pointer'>
           About
           </h3>

           </div>
        <div className='logos flex row gap-4 justify-end'>
     <BiLogoFacebookCircle size={35} />
     <BiLogoInstagram size={35} />
     <BiLogoLinkedinSquare size={35} />
     <BiLogoYoutube size={35} />
    </div>
        </div>
         
        <div className='flex col justify-between mt-6'>
            <h2 className='text-lg mt-2'>
            Contact Us
            </h2>
       
        <div> 
            <button className='text-lg bg-green-600 px-12 py-2 rounded-3xl'>
            Subscribe to our Newsletter
            </button>
            </div> 
        </div>

    </div>

   
  )
}

export default Footer

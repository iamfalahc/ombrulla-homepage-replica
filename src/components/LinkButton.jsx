import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = () => {
  return (
    <div>
       <Link>
         <div className="flex">
            <span className="pl-6 pt-4">Read more</span>
            <div className="pt-3">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 md:w-5 md:h-5 XL:w-8 XL:h-8 font-bold text-[#0000FF]" data-astro-cid-ziqbhiws=""><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" data-astro-cid-ziqbhiws=""></path></svg>

            </div>
          </div>
         </Link>
    </div>
  )
}

export default LinkButton

import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = () => {
  return (
    <div>
       <Link>
         <div className="flex">
            <span className="pl-6 pt-4 ml-6">Read more</span>
            <div className="pt-3">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]" data-astro-cid-ziqbhiws=""><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" data-astro-cid-ziqbhiws=""></path></svg>

            </div>
          </div>
         </Link>
    </div>
  )
}

export default LinkButton

import React from 'react'
import {NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='flex justify-between px-24 pt-8 '>
     <section>
        <img className='w-32' src="	https://www.ombrulla.com/logo.svg"alt="" />
     </section> 
     <section className='flex gap-x-12'>
        <NavLink className="rounded-md px-3 py-2  font-bold font-sans text-primary hover:text-primary" to={"/"}>Home</NavLink>
        <NavLink className="rounded-md px-3 py-2  font-bold font-sans text-primary hover:text-primary" to={"/services"}>Services</NavLink>
        <NavLink className="rounded-md px-3 py-2  font-bold font-sans text-primary hover:text-primary" to={"/product"}>Product</NavLink>
        <NavLink className="rounded-md px-3 py-2  font-bold font-sans text-primary hover:text-primary" to={"/about"}>About</NavLink>
        <NavLink className="rounded-md px-3 py-2  font-bold font-sans text-primary hover:text-primary" to={"/blog"}>Blog</NavLink>
        <NavLink className="rounded-md px-3 py-2  font-bold font-sans text-primary hover:text-primary" to={"/contact"}>Contact</NavLink>
     </section> 
    </nav>
  )
}

export default Navbar

import {BsCart4} from 'react-icons/bs'
import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cart} = useSelector((state) => state)

  return(
    <div className='bg-[#0f172a] h-20 '>
      <div className='max-w-[1100px] mx-auto flex justify-between items-center '>
        <NavLink to={'/'}>
          <div className='mt-3'>
            <img src={logo} width={170} />
          </div>
        </NavLink>
       

        <div className='flex gap-x-5 mt-3'>
          <NavLink to={'/'}>
            <p className='text-white'>Home</p>
          </NavLink>

          <NavLink to="/cart">
              <div className="relative">
                  <BsCart4 className="text-xl text-white"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
          
        </div>
      </div>
    </div>
  )
};

export default Navbar;



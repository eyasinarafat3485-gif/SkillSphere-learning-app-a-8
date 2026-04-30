'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { BiMenu, BiX } from 'react-icons/bi';

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Courses", path: "/courses" },
  { id: 3, name: "My Profile", path: "/my-profile" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <nav className='sticky top-0 z-50 bg-[#485966] shadow-sm'>
      <div className='max-w-7xl mx-auto px-3 py-5 md:px-15 relative flex items-center justify-between'>
        
        <div className='flex items-center gap-3 shrink-0'>
          <Link href="/" className='bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold'>
            SK
          </Link>
          <Link href="/" className='text-xl font-bold tracking-tight text-gray-300 uppercase'>
            SkillSphere
          </Link>
        </div>

        <ul className='hidden lg:flex items-center gap-8 font-medium absolute left-1/2 -translate-x-1/2'>
          {navLinks.map((link) => {
            const isActive = pathname === link.path; 
            return (
              <li key={link.id}>
                <Link 
                  href={link.path}
                  className={`text-lg font-bold transition-colors ${
                    isActive ? 'bg-red-500 p-2 text-white rounded-lg' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center gap-4'>
          <div className="hidden lg:flex gap-2">
            <Link href="/signup">
              <button className='btn rounded-md cursor-pointer font-semibold bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 transition-all'>
                SignUp
              </button>
            </Link>
            <Link href="/signin">
              <button className='btn rounded-md cursor-pointer font-semibold bg-green-500 hover:bg-green-600 text-white px-4 py-2 transition-all'>
                SignIn
              </button>
            </Link>
          </div>

          <div className='lg:hidden'>
            <button onClick={() => setOpen(!open)} className='text-3xl focus:outline-none'>
              {open ? <BiX className='text-red-500'/> : <BiMenu className='text-gray-300'/>}
            </button>
          </div>
        </div>

        <ul className={`
          lg:hidden absolute right-5 bg-white border border-gray-100 flex flex-col gap-1 shadow-2xl rounded-xl w-35 transition-all duration-300 ease-in-out z-50 p-2
          ${open ? 'top-[75px] opacity-100 visible' : 'top-[60px] opacity-0 invisible'}
        `}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.id} onClick={() => setOpen(false)}>
                <Link 
                  href={link.path}
                  className={`block text-base font-medium p-2 rounded-lg transition-colors ${
                    isActive ? 'text-red-500 bg-red-200 font-bold' : 'text-black hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {/* Mobile Buttons inside Dropdown */}
          <div className="border-t border-gray-100 mt-2 pt-2 flex flex-col gap-2">
            <Link href="/signup" onClick={() => setOpen(false)}>
              <button className='w-full text-center py-2 bg-pink-500 text-white rounded-lg font-semibold text-sm'>
                SignUp
              </button>
            </Link>
            <Link href="/signin" onClick={() => setOpen(false)}>
              <button className='w-full text-center py-2 bg-green-500 text-white rounded-lg font-semibold text-sm'>
                SignIn
              </button>
            </Link>
          </div>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
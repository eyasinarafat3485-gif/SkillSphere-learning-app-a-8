// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { BiMenu, BiX } from 'react-icons/bi';
// import { authClient } from '@/lib/auth-client';
// import { Avatar, Button } from '@heroui/react';

// const navLinks = [
//   { id: 1, name: "Home", path: "/" },
//   { id: 2, name: "Courses", path: "/courses" },
//   { id: 3, name: "My Profile", path: "/my-profile" },
// ];

// const Navbar = () => {
//   const userData = authClient.useSession();
//   // console.log(userData);
//   const user = userData.data?.user
//   // console.log(user);

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   }

//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <nav className='sticky top-0 z-50 bg-[#485966] shadow-sm'>
//       <div className='max-w-7xl mx-auto px-3 py-5 md:px-15 relative flex items-center justify-between'>

//         <div className='flex items-center gap-3 shrink-0'>
//           <Link href="/" className='bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold'>
//             SK
//           </Link>
//           <Link href="/" className='text-xl font-bold tracking-tight text-gray-300 uppercase'>
//             SkillSphere
//           </Link>
//         </div>

//         <ul className='hidden lg:flex items-center gap-8 font-medium absolute left-1/2 -translate-x-1/2'>
//           {navLinks.map((link) => {
//             const isActive = pathname === link.path;
//             return (
//               <li key={link.id}>
//                 <Link
//                   href={link.path}
//                   className={`text-lg font-bold transition-colors ${isActive ? 'bg-red-500 p-2 text-white rounded-lg' : 'text-gray-300'
//                     }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>

//         <div className='flex items-center gap-4'>
//           {!user && <ul>
//             <div className="hidden lg:flex gap-2">
//               <li>
//                 <Link href="/signup">
//                   <button className='btn rounded-md cursor-pointer font-semibold bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 transition-all'>
//                     SignUp
//                   </button>
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/signin">
//                   <button className='btn rounded-md cursor-pointer font-semibold bg-green-500 hover:bg-green-600 text-white px-4 py-2 transition-all'>
//                     SignIn
//                   </button>
//                 </Link>
//               </li>
//             </div>
//           </ul>}
//           {
//             user && <div className="flex gap-3"><Avatar>
//               <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
//               <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
//             </Avatar>
//               <Button onClick={handleSignOut} className='bg-red-500 rounded-md btn hover:bg-red-600 text-lg font-semibold p-2'>Sign Out</Button>
//             </div>
//           }

//           <div className='lg:hidden'>
//             <button onClick={() => setOpen(!open)} className='text-3xl focus:outline-none'>
//               {open ? <BiX className='text-red-500' /> : <BiMenu className='text-gray-300' />}
//             </button>
//           </div>
//         </div>

//         <ul className={`
//           lg:hidden absolute right-5 bg-white border border-gray-100 flex flex-col gap-1 shadow-2xl rounded-xl w-35 transition-all duration-300 ease-in-out z-50 p-2
//           ${open ? 'top-[75px] opacity-100 visible' : 'top-[60px] opacity-0 invisible'}
//         `}>
//           {navLinks.map((link) => {
//             const isActive = pathname === link.path;
//             return (
//               <li key={link.id} onClick={() => setOpen(false)}>
//                 <Link
//                   href={link.path}
//                   className={`block text-base font-medium p-2 rounded-lg transition-colors ${isActive ? 'text-red-500 bg-red-200 font-bold' : 'text-black hover:bg-red-50 hover:text-red-500'
//                     }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             );
//           })}

//           {/* Mobile Buttons inside Dropdown */}
//           <div className="border-t border-gray-100 mt-2 pt-2 flex flex-col gap-2">
//             <Link href="/signup" onClick={() => setOpen(false)}>
//               <button className='w-full text-center py-2 bg-pink-500 text-white rounded-lg font-semibold text-sm'>
//                 SignUp
//               </button>
//             </Link>
//             <Link href="/signin" onClick={() => setOpen(false)}>
//               <button className='w-full text-center py-2 bg-green-500 text-white rounded-lg font-semibold text-sm'>
//                 SignIn
//               </button>
//             </Link>
//           </div>
//         </ul>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiMenu, BiX } from 'react-icons/bi';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Courses", path: "/courses" },
  { id: 3, name: "My Profile", path: "/my-profile" },
];

const Navbar = () => {
  const userData = authClient.useSession();

  const user = userData.data?.user;
  const isLoading = userData.isLoading || userData.isPending;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 z-50 bg-[#485966] shadow-sm'>
      <div className='max-w-7xl mx-auto px-3 py-5 md:px-15 relative flex items-center justify-between'>

        {/* Logo */}
        <div className='flex items-center gap-3 shrink-0'>
          <Link href="/" className='bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold'>
            SK
          </Link>
          <Link href="/" className='text-xl font-bold tracking-tight text-gray-300 uppercase'>
            SkillSphere
          </Link>
        </div>

        {/* Nav Links */}
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

        {/* RIGHT AUTH SECTION */}
        <div className='flex items-center gap-4'>

          {/* 🔥 ONLY AUTH AREA LOADING */}
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {/* Logged OUT */}
              {!user && (
                <ul className="hidden lg:flex gap-2">
                  <li>
                    <Link href="/signup">
                      <button className='bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md font-semibold'>
                        SignUp
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link href="/signin">
                      <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold'>
                        SignIn
                      </button>
                    </Link>
                  </li>
                </ul>
              )}

              {/* Logged IN */}
              {user && (
                <div className="flex items-center gap-3">
                  <Avatar>
                    <Avatar.Image
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>
                      {user?.name?.[0]}
                    </Avatar.Fallback>
                  </Avatar>

                  <Button
                    onClick={handleSignOut}
                    className='bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 rounded-md'
                  >
                    Sign Out
                  </Button>
                </div>
              )}
            </>
          )}

          {/* Mobile Menu */}
          <div className='lg:hidden'>
            <button onClick={() => setOpen(!open)} className='text-3xl'>
              {open ? <BiX className='text-red-500' /> : <BiMenu className='text-gray-300' />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        <ul className={`
          lg:hidden absolute right-5 bg-white flex flex-col gap-1 shadow-xl rounded-xl w-40 p-2 transition-all duration-300 z-50
          ${open ? 'top-[75px] opacity-100 visible' : 'top-[60px] opacity-0 invisible'}
        `}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.id} onClick={() => setOpen(false)}>
                <Link
                  href={link.path}
                  className={`block p-2 rounded-lg ${
                    isActive ? 'text-red-500 bg-red-100 font-bold' : 'text-black'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          <div className="border-t mt-2 pt-2 flex flex-col gap-2">
            <Link href="/signup" onClick={() => setOpen(false)}>
              <button className='w-full bg-pink-500 text-white py-2 rounded-md text-sm'>
                SignUp
              </button>
            </Link>

            <Link href="/signin" onClick={() => setOpen(false)}>
              <button className='w-full bg-green-500 text-white py-2 rounded-md text-sm'>
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
import { MagnifyingGlass, User } from '@phosphor-icons/react'
import blackLogo from '../../assets/trisog-black-logo.svg'
export default function Navigation() {
  return (
    <header 
      className='w-full h-[72px] bg-white flex flex-row justify-between px-[50px]'
    >
      <nav className='w-fit flex flex-row items-center gap-16'>
        <img src={blackLogo} alt="Trisog Black Logo" title='Trisog' width={110} height={32} className='cursor-pointer'/>
        <ul className='flex flex-row gap-6 list-none text-gray-400 h-fit font-medium font-sans'>
          <li className='text-rose-500'>Home</li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Tours</a></li>
          <li><a href='#'>Destination</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Pages</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <div className='w-fit text-black flex flex-row items-center gap-2'>
        <MagnifyingGlass size={24} className='cursor-pointer'/>
        <User size={24} className='cursor-pointer'/>
        <a className='font-bold font-sans' href='#'>Login / Signup</a>
      </div>
    </header>
  )
}
import { MagnifyingGlass, User } from '@phosphor-icons/react'
import blackLogo from '../../assets/trisog-black-logo.svg'
import { NavLink, NavLinkRenderProps } from 'react-router-dom';

type NavigationProps = {
  onClickLogin: () => void;
}

const NAV_ITEMS = [
  {label: "Home", link: "/"},
  {label: "About", link: "/about"},
  {label: "Tours", link: "/tours"},
  {label: "Destination", link: "/destination"},
  {label: "Blog", link: "/blog"},
  {label: "Pages", link: "/pages"},
  {label: "Contacts", link: "/contacts"}
]

const activeStyle = "text-rose-500 font-bold"
const pendingStyle = "hover-bright hover:text-gray-500"

const handleStyle = ({ isActive, isPending }: NavLinkRenderProps) => 
  isPending ? pendingStyle : isActive ? activeStyle : pendingStyle 

export default function Navigation(props: NavigationProps) {
  return (
    <header 
      className='top-0 w-full h-[72px] bg-white flex flex-row justify-between px-[50px] sticky z-[10000]'
    >
      <nav className='w-fit flex flex-row items-center gap-16'>
        <img 
          src={blackLogo} 
          alt="Trisog Black Logo" 
          title='Trisog' 
          width={110} height={32} 
          className='cursor-pointer'
        />
        <ul className='flex flex-row gap-6 list-none text-gray-400 h-fit text-body'>
          {NAV_ITEMS.map(item => {
            return (
              <li key={item.label}>
                <NavLink to={item.link} className={handleStyle}>
                  {item.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className='w-fit text-blue-950 flex flex-row items-center gap-2'>
        <MagnifyingGlass size={24} className='cursor-pointer'/>
        <User size={24} className='cursor-pointer'/>
        <button className='text-subtitle text-gray-600 hover-bright' onClick={props.onClickLogin}>Login / Signup</button>
      </div>
    </header>
  )
}
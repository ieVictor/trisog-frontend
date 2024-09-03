import { User } from '@phosphor-icons/react';
import blackLogo from '../../assets/trisog-black-logo.svg';
import { NavLink, NavLinkRenderProps, useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/userHooks';
import UserProfile from './athoms/UserProfile';
import Login from '../Modal/components/Login';
import useModal from '../../hooks/modalHooks';
import { toast } from 'react-toastify';
import SearchPopover from './athoms/SearchPopover';

const NAV_ITEMS = [
  { label: 'Home', link: '/', protected: false },
  { label: 'About', link: '/about', protected: false },
  { label: 'Tours', link: '/tours', protected: true },
  { label: 'Destination', link: '/destination', protected: false },
  { label: 'Blog', link: '/blog', protected: false },
  { label: 'Pages', link: '/pages', protected: false },
  { label: 'Contacts', link: '/contacts', protected: false },
];

const activeStyle = 'text-rose-500 font-bold';
const pendingStyle = 'hover-bright hover:text-gray-500';

const handleStyle = ({ isActive, isPending }: NavLinkRenderProps) =>
  isPending ? pendingStyle : isActive ? activeStyle : pendingStyle;

export default function Navigation() {
  const userHooks = useUser();
  const { openModal } = useModal();
  const navigate = useNavigate();

  const handleSearch = (searchContent: string) => {
    if (searchContent)
      navigate(`tours?destination=${searchContent}`);
  };

  const handleLogin = () => {
    openModal(<Login />, 'Login or Sign Up');
  };

  const handleProtectedLink = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof NAV_ITEMS)[0]
  ) => {
    if (item.protected && !userHooks.user) {
      event.preventDefault();
      toast.info('You need to be logged in to access this feature');
      return handleLogin();
    }

    return navigate(item.link);
  };

  return (
    <header className="top-0 w-full h-[72px] bg-white flex flex-row justify-between px-[50px] sticky z-[10000]">
      <nav className="w-fit flex flex-row items-center gap-16">
        <img
          src={blackLogo}
          alt="Trisog Black Logo"
          title="Trisog"
          width={110}
          height={32}
          className="cursor-pointer"
        />
        <ul className="flex flex-row gap-6 list-none text-gray-400 h-fit text-body">
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.label}>
                <NavLink
                  to={item.link}
                  className={handleStyle}
                  onClick={(event) => handleProtectedLink(event, item)}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="w-fit text-blue-950 flex flex-row items-center gap-2">
        <SearchPopover onSubmit={handleSearch} />
        {!userHooks.user ? (
          <>
            <User size={24} className="cursor-pointer" />
            <button
              className="text-subtitle text-gray-600 hover-bright"
              onClick={handleLogin}
            >
              Login / Signup
            </button>
          </>
        ) : (
          userHooks.profile && (
            <>
              <UserProfile
                username={userHooks.profile.data.username}
                imgURL={userHooks.profile.data.img}
              />
            </>
          )
        )}
      </div>
    </header>
  );
}

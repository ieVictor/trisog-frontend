import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { useUser } from "../../../hooks/userHooks"
import { SignOut } from "@phosphor-icons/react"

type UserProfileProps = {
 imgURL?: string
 username?: string
}

export default function UserProfile(props: UserProfileProps) {
  const DEFAULT_URL = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
  const userHooks = useUser();

  const handleLogout = () => {
    userHooks.auth.signOut();
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar 
          src={props.imgURL === DEFAULT_URL ? '' : props.imgURL} 
          name={props.imgURL === DEFAULT_URL ? props.username : ''}
          color="danger"
          className='rounded-full cursor-pointer'
          size="sm"
          isBordered
          radius="sm"
        />
      </DropdownTrigger>
      <DropdownMenu variant="bordered" color="primary">
        <DropdownItem 
          key="logout" 
          className="text-gray-800" 
          color="danger" 
          onClick={handleLogout} 
          endContent={(
          <SignOut size={16}/>
          )}
        >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
} 
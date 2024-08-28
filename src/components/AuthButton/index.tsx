import { FacebookLogo, GoogleLogo } from "@phosphor-icons/react";

type AuthButtonProps = {
  content: string;
  socialMedia: "facebook" | "google"
  onClick: () => void
}

export default function AuthButton(props: AuthButtonProps) {
  return (
    <button 
      className={
        "flex flex-row w-full items-center px-5 py-3 border-2" +
        " border-gray-300 rounded-lg bg-white hover-bright"
      }
      onClick={props.onClick}
      type="button"
    >
      {props.socialMedia == "facebook" ? <FacebookLogo size={20}/> : <GoogleLogo size={20}/>}
      <span className="w-full text-center text-body-s text-black">{props.content}</span>
    </button>
  )
}
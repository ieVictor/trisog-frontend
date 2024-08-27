import { Input } from "@nextui-org/react";
import AuthButton from "../AuthButton";
import Button from "../Button";
import { useRef } from "react";
import { getInputValues } from "./helpers/getInputValues";

type LoginProps = {
  onSubmit: () => void;
}

export default function Login(props: LoginProps) {
  const loginRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    const values = getInputValues(loginRef);
    if (values) console.log(values);
    return props.onSubmit()
  }

  return (
    <form ref={loginRef}>
      <div className='flex flex-col gap-4'>
        <h5 className="text-h5 text-blue-950">Welcome to Trisog</h5>
        <Input placeholder='Name' label="Name" variant='bordered' name='username'/>
        <Input placeholder='Email' label="Email" variant='bordered' name='email'/>
        <Input placeholder='Password' label="Password" variant='bordered' type='password' name='pwd'/>
        <Button onClick={handleSubmit} text='Continue' type='button' fill/>
      </div>
      <span className='text-gray-400 text-action w-full flex flex-row items-center gap-4'>
        <hr className='w-full'/>
        or
        <hr className='w-full'/>
      </span>
      <div className='flex flex-col gap-4'>
        <AuthButton 
          content='Continue with Google' 
          socialMedia='google'
          onClick={() => {}}
        />
        <AuthButton 
          content='Continue with Facebook' 
          socialMedia='facebook'
          onClick={() => {}}
        />
      </div>
    </form>
  )
}
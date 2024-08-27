import React from "react"

type InputContainerProps = {
  children: React.ReactNode
}

export default function InputContainer({ children }: InputContainerProps) {
  return (
    <div 
      className={`
        flex flex-col gap-2.5 p-7 bg-gray-100
        font-display font-bold text-black text-lg text-start   
      `}
    >
      {children}
    </div>
  )
}
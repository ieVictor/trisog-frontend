import React from "react"

type ListContainerProps = {
  children: React.ReactNode
}

export default function ListContainer({ children }: ListContainerProps) {
  return (
    <div 
      className={`
        flex flex-col gap-5 p-7 bg-gray-100
        font-display font-bold text-black text-lg text-start   
      `}
    >
      {children}
    </div>
  )
}
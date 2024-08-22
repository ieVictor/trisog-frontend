import React from "react"
import ListContainer from "../athoms/ListContainer"

type CheckBoxListProps = {
  title?: string;
  children: React.ReactNode
}



export default function CheckBoxList(props: CheckBoxListProps) {
  return (
    <ListContainer>
      <h6>{props.title}</h6>
      <div className="flex flex-col gap-4">
        {props.children}
      </div>
    </ListContainer>
  )
}
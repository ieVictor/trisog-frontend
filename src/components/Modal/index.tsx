import { X } from "@phosphor-icons/react";

type ModalProps = {
  modalTitle: string;
  children: React.ReactNode
  onCancel: () => void
}

export default function Modal(props: ModalProps) {
  return (
    <div 
      className={
        "flex w-full h-screen justify-center overflow-hidden" + 
        " self-center items-center top-0 fixed z-[100000]" +
        " p-10"
      }
    >
      <div 
        className="bg-black opacity-50 absolute size-full" 
        onClick={props.onCancel}
      />
      <div 
        className={
          "w-[570px] h-fit bg-white flex flex-col absolute " +
          "rounded-2xl fixed" 
        }
      >
        <hgroup 
          className={
            "w-full h-fit px-6 py-5 border-b border-gray-200" +
            " flex flex-row items-center"
          }
        >
          <X 
            size={16} 
            onClick={props.onCancel} 
            className="cursor-pointer size-5 rounded hover:bg-gray-200 transition-all"
          />
          <h6 className="text-subtitle text-blue-950 w-full text-center">
            {props.modalTitle}
          </h6>
        </hgroup>
        <div className="flex flex-col gap-10 p-6 w-full h-fit">
          {props.children}
        </div>
      </div>
    </div>
  )
}
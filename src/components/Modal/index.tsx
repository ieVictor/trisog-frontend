import { X } from "@phosphor-icons/react";
import useModal from "../../hooks/modalHooks";

export default function Modal() {
  const { isOpen, closeModal, content, title } = useModal();

  if (!isOpen) return null;

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
        onClick={closeModal}
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
            onClick={closeModal} 
            className="cursor-pointer size-5 rounded hover:bg-gray-200 transition-all"
          />
          <h6 className="text-subtitle text-blue-950 w-full text-center">
            {title} 
          </h6>
        </hgroup>
        <div className="flex flex-col gap-10 p-6 w-full h-fit">
          {content}
        </div>
      </div>
    </div>
  )
}
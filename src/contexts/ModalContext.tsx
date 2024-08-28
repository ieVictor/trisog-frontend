import { createContext, useEffect, useState } from "react";

type ModalProviderProps = {
  children: React.ReactNode
}

type ModalContextProps = {
  isOpen: boolean;
  openModal: (content: React.ReactNode, modalTitle: string) => void;
  closeModal: () => void;
  content: React.ReactNode | null;
  title: string;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export function ModalProvider(props: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const scrollPosition = window.scrollY

    if(isOpen) {
      document.body.style.inset = `-${scrollPosition}px 0px 0px`
      document.documentElement.style.scrollbarGutter = "stable"
      document.documentElement.style.width = "100%"
      document.body.style.position = "fixed"
    } 
    else if (!isOpen && document.body.style.position == "fixed") {
      const scrollPosition = Math.abs(parseInt(document.body.style.top, 10))
      document.body.style.removeProperty("inset");
      document.body.style.removeProperty("scrollbarGutter");
      document.body.style.removeProperty("position");
      document.documentElement.style.removeProperty("width");
      window.scrollTo(0, scrollPosition);
    }
  }, [isOpen])
  
  const openModal = (modalContent: React.ReactNode, modalTitle: string) => { 
    setContent(modalContent);
    setIsOpen(true);
    setTitle(modalTitle);
  }

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
    setTitle("");
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, content, title }}>
      {props.children}
    </ModalContext.Provider>
  );
};
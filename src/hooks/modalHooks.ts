import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export default function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used withing a modalProvider');
  }

  return context;
}
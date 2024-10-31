import { IconX } from "@tabler/icons-react";
import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative h-3/4 w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
      <button
        onClick={onClose}
        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
      >
        <IconX />
      </button>
      {children}
    </div>
  </div>
);

export default Modal;

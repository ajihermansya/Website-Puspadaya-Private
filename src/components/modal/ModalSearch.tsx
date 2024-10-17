// import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import React from "react";

// Tipe props untuk ModalSearch
type ModalSearchProps = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode; // Untuk menerima children element
  onClose: () => void;
  onSearch?: () => void; // Tambahkan onSearch sebagai optional prop
};

const ModalSearch: React.FC<ModalSearchProps> = ({ isOpen, title, children, onClose, onSearch }) => {
  const footerContent = (
    <div>
      <Button label="Close" icon="pi pi-times" onClick={onClose} className="p-button-secondary" />
      {onSearch && (
        <Button label="Search" icon="pi pi-check" onClick={onSearch} className="p-button-primary" />
      )}
    </div>
  );

  return (
    <Dialog
      header={title}
      visible={isOpen}
      style={{ width: "50vw" }}
      onHide={onClose}
      footer={footerContent}
    >
      {children}
    </Dialog>
  );
};

export default ModalSearch;

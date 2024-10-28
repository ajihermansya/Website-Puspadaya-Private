"use client";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";

import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import { ItemTemplateOptions } from "primereact/fileupload";
import Image from "next/image";

const ImageUploadSingle = (file:File) => {
  const [files, setFiles] = useState<File>(file);
  const fileUploadRef = useRef<FileUpload>(null);
  const [totalSize, setTotalSize] = useState<number>(0);

  //single
  const onTemplateSelect = (e: { files: File[] }) => {
    const file = e.files[0]; // Hanya ambil file terbaru
    setTotalSize(file.size); // Set total size dengan ukuran file terbaru
    setFiles(file); // Set files array hanya dengan file terbaru
  };

  const onTemplateRemove = (file: File, callback: Function) => {
    setTotalSize(0); // Set total size menjadi 0 setelah file dihapus ada jika single, tidak ada jika multiple
    callback(); // Lanjutkan proses penghapusan
  };

  const headerTemplate = (options: {
    className: string;
    chooseButton: JSX.Element;
    uploadButton: JSX.Element;
    cancelButton: JSX.Element;
  }) => {
    const { className, chooseButton, cancelButton } = options;
    const value = totalSize / 20000;
    const formattedValue =
      fileUploadRef.current?.formatSize(totalSize) || "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {cancelButton}
        <div className="align-items-center ml-auto flex gap-3">
          <span>{formattedValue} / 2 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          />
        </div>
      </div>
    );
  };

  const itemTemplate = (file: object, options: ItemTemplateOptions) => {
    const fileObj = file as File;
    const imageUrl = URL.createObjectURL(fileObj);

    return (
      <div className="align-items-center flex flex-wrap">
        <div className="align-items-center flex" style={{ width: "40%" }}>
          <Image
            alt={fileObj.name}
            role="presentation"
            src={imageUrl}
            width={100}
            height={100}
            onLoad={() => URL.revokeObjectURL(imageUrl)}
          />
          <span className="flex-column ml-3 flex text-left">
            {fileObj.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        {/* <Tag
          value={fileUploadRef.current?.formatSize(fileObj.size)}
          severity="warning"
          className="px-3 py-2"
        /> */}
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={(e) => onTemplateRemove(fileObj, () => options.onRemove(e))}
        />
      </div>
    );
  };

  const emptyTemplate = () => (
    <div className="align-items-center flex-column flex">
      <i
        className="pi pi-image mt-3 p-5"
        style={{
          fontSize: "5em",
          borderRadius: "50%",
          backgroundColor: "var(--surface-b)",
          color: "var(--surface-d)",
        }}
      ></i>
      <span
        style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
        className="my-5"
      >
        Drag and Drop Image Here
      </span>
    </div>
  );

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };

  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };
  return (
    <div className="">
      <FileUpload
        ref={fileUploadRef}
        name="demo[]"
        multiple={false}
        accept="image/*"
        maxFileSize={2000000}
        onSelect={onTemplateSelect}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
        cancelOptions={cancelOptions}
      />
    </div>
  );
};

export default ImageUploadSingle;

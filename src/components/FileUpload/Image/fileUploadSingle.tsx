import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import { ItemTemplateOptions } from "primereact/fileupload";
import Image from "next/image";

interface ImageUploadSingleProps {
  file: File | null;
  onFileSelect: (file: File) => void;
}

const ImageUploadSingle: React.FC<ImageUploadSingleProps> = ({
  file,
  onFileSelect,
}) => {
  const fileUploadRef = useRef<FileUpload>(null);
  const [totalSize, setTotalSize] = useState(file ? file.size : 0);

  const onTemplateSelect = (e: { files: File[] }) => {
    const selectedFile = e.files[0];
    onFileSelect(selectedFile); // Kirim file ke komponen Page
    setTotalSize(selectedFile.size); // Update totalSize saat file dipilih
  };

  const onTemplateRemove = (callback: Function) => {
    onFileSelect(null as any); // Kosongkan file
    setTotalSize(0); // Reset totalSize menjadi 0 saat file dihapus
    callback();
  };

  const headerTemplate = (options: {
    className: string;
    chooseButton: JSX.Element;
    cancelButton: JSX.Element;
  }) => {
    const { className, chooseButton, cancelButton } = options;
    const value = totalSize / 20000;
    const formattedValue =
      fileUploadRef.current?.formatSize(totalSize) || "0 B";
    // setTotalSize(formattedValue);
    return (
      <div
        className={className}
        style={{ display: "flex", alignItems: "center" }}
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

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const itemTemplate = (file: object, options: ItemTemplateOptions) => {
    const fileObj = file as File;
    const imageUrl = URL.createObjectURL(fileObj);

    return (
      <div className="align-items-center flex flex-wrap">
        <div className="align-items-center flex" style={{ width: "40%" }}>
          <Image
            alt={fileObj.name}
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
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={(e) => onTemplateRemove(() => options.onRemove(e))}
        />
      </div>
    );
  };

  const emptyTemplate = () => (
    <div className="align-items-center flex-column flex">
      <i className="pi pi-image mt-3 p-5" style={{ fontSize: "5em" }}></i>
      <span style={{ fontSize: "1.2em" }} className="my-5">
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

    onClick: () => {
      setTotalSize(0); // Reset totalSize menjadi 0
    },
  };

  return (
    <FileUpload
      ref={fileUploadRef}
      name="demo[]"
      multiple={false}
      accept="image/*"
      maxFileSize={2000000}
      onSelect={onTemplateSelect}
      headerTemplate={headerTemplate}
      itemTemplate={itemTemplate}
      onError={onTemplateClear} onClear={onTemplateClear}
      emptyTemplate={emptyTemplate}
      chooseOptions={chooseOptions}
      cancelOptions={cancelOptions}
    />
  );
};

export default ImageUploadSingle;

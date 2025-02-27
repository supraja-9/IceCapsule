import { useRef } from "react";

const UploadButton = () => {
  const fileInputRef = useRef(null);

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];
    console.log("Uploading:", file);
    // Handle file upload logic here
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} className="hidden" onChange={uploadFile} />
      <button onClick={triggerUpload} className="bg-blue-500 px-4 py-2 text-white rounded">
        Upload File
      </button>
    </div>
  );
};

export default UploadButton;

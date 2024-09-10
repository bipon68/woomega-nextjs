"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";

const Uploading: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      const response = await axios.post("/api/Woomega/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setImages([response.data.filePath]);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className=" my-50">
      <div className=" container mx-auto grid items-center border border-dashed border-gray-500 relative p-10">
        <input
          type="file"
          multiple
          className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
          onChange={handleFileChange}
        />
        <div className="text-center absolute top-0 right-0 left-0 m-auto">
          <div>
            Drop files anywhere to upload
            <br />
            or
          </div>
          <div className="">Select Files</div>
        </div>
        <div className="border size-100 flex flex-wrap justify-center">
          {images.map((files, index) => (
            <div key={index} className="m-2">
              <Image
                src={files}
                width={0}
                height={0}
                sizes="100"
                alt={`Uploaded ${index}`}
                className="max-w-xs size-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uploading;

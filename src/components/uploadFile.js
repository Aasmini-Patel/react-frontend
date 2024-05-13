import React, { useState, useEffect } from "react";
import { uploadBlog } from "../api";

const UploadPage = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleBlogUpload = async (e) => {
    e.preventDefault();
    try {
      await uploadBlog(name, image, description);
    } catch (error) {
      console.error('Error in upload ', error);
    }
  };

  return (
    // <div>
    //   <h2>Upload Files</h2>
    //   <input type="file" onChange={handleFileUpload} />
    // </div>
    <div>
      <h2>Blog</h2>
      <form onSubmit={handleBlogUpload}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Image:</label>
          {/* <input type="file" onChange={handleFileUpload} /> */}
          <input type="file" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPage;

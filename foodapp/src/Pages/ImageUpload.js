import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error('Error uploading the image', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {imageUrl && (
        <div>
          <p>Image uploaded successfully. Here is the image:</p>
          <img src={`http://localhost:5000${imageUrl}`} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

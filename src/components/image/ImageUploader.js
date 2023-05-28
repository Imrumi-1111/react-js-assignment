import React, { useState } from 'react';

const ImageUploader = ({ setImage }) => {
  const [file, setFile] = useState('');

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    // Perform image optimization and upload
    // ...
    // After optimization, set the image URL or blob to the 'setImage' prop
    const optimizedImageURL = "https://media.istockphoto.com/id/1268465415/photo/quiz-time-concept-speech-bubble-with-pencil-on-yellow-background.jpg?s=612x612&w=0&k=20&c=ZowfYpCJeyknpWhnfyWqV1_If6aJmFUiSqqqEUBhvAg="
    setImage(optimizedImageURL);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploader;

import React from 'react';

const ViewUploadedCard = ({ file, id, removeFromFiles, isError, setIsError, setErrorMessage, errorMessage }) => {
  // Assuming file is an object with properties like name, type, size, etc.
  const { name, type, size } = file;

  // Function to handle removing the file
  const handleRemove = () => {
    removeFromFiles(id);
  };

  return (
    <div className="uploadedCard">
      <div>{name}</div>
      <div>{type}</div>
      <div>{size}</div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default ViewUploadedCard;

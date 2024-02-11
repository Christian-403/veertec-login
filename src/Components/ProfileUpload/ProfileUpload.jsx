import React, { useState } from "react";
import "./ProfileUpload.scss";
import ProfileImage from "../../Assets/images/KeyIcons.png";

const ProfileUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  return (
    <div className="profile-picture-container">
      <input
        type="file"
        id="profilePictureInput"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <label htmlFor="profilePictureInput" className="profile-picture-label">
        {selectedImage ? (
          <>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Profile"
              className="profile-picture"
            />
          </>
        ) : (
          <div className="profile-picture-placeholder">
            <img
              src={ProfileImage}
              alt="Upload file"
              className="default-image"
            />
          </div>
        )}
      </label>
    </div>
  );
};

export default ProfileUpload;

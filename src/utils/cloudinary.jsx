export const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file); // The file to upload
    formData.append("upload_preset", "frontend_uploads"); // Replace with your preset name
  
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.secure_url) {
        return data.secure_url; // Return the uploaded image URL
      } else {
        console.error("Upload failed:", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
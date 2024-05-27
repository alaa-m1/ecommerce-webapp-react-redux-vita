
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.
import {sepia} from "@cloudinary/url-gen/actions/effect";

export const CList = () => {
  // Create and configure your Cloudinary instance.
  // {
  //   cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  //   api_key: import.meta.env.CLOUDINARY_API_KEY,
  //   api_secret: import.meta.env.CLOUDINARY_API_SECRET,
  // }
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME,
      apiKey: import.meta.env.VITE_REACT_APP_CLOUDINARY_API_KEY,
      apiSecret: import.meta.env.VITE_REACT_APP_CLOUDINARY_API_SECRET,
    }
  }); 

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image('front_face');

  // Apply the transformation.
  myImage
  .effect(sepia());  // Apply a sepia effect.

  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
};
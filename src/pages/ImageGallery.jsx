import React from 'react';
import { Image } from 'antd';
import imageData from '../data/ImageGallery.js';

const ImageGallery = () => {
  return (
    <>
    <h2 className='text-2xl font-bold text-center'>Image Gallery</h2>
    <Image.PreviewGroup
      preview={{
        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
      }}
    >
      <div className="flex flex-row flex-wrap gap-4 p-4">
        {imageData.map((item) => (
          <div key={item.id} className="w-auto bg-gray-300 shadow-2xl hover:scale-105">
            <Image width={150} height={150} src={item.image} />
          </div>
        ))}
      </div>
    </Image.PreviewGroup>
    </>
  );
};

export default ImageGallery;

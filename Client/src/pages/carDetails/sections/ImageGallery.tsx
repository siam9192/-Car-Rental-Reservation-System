import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

type TImageGalleryProps = {
  images: string[];
};

const ImageGallery = ({ images }: TImageGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleActiveImage = (index: number) => {
    setActiveImage(index);
  };
  return (
    <div className=" gap-5">
      
      <div className="  ">
        <div className="w-full lg:block hidden">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: images[activeImage],
                width: 440,
                height: 440,
              },
              largeImage: {
                src: images[activeImage],
                width: 836,
                height: 1100,
              },
            }}
          />
        </div>

       <div className=' flex items-center justify-center min-h-[200px] lg:hidden'>
       <img src={images[activeImage]} className="w-full " alt="" />
       </div>
      </div>
      <div className=" grid grid-cols-4 gap-5">
        {images.map((image, index) => {
          return (
            <div
              className={`p-1 hover:cursor-pointer ${activeImage === index ? 'border-4 border-info_color' : ' border-2 border-black'}`}
              onClick={() => handleActiveImage(index)}
              key={index}
            >
              <img src={image} className="w-full " key={index} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
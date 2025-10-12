import React from 'react';
import { ImgProps } from './Img.types';

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  rounded = false,
  className = '',
}) => {
  const style: React.CSSProperties = {
    width,
    height,
    borderRadius: rounded ? '8px' : undefined,
    objectFit: 'cover',
  };

  return <img src={src} alt={alt} style={style} className={className} />;
};

export default Img;
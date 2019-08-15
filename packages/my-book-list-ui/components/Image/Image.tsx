import { IImage } from '../../types';

interface IImageProps {
  image: IImage;
  alt?: string;
}

const Image = ({ image, alt = '' }: IImageProps) => (
  <>
    <img data-hook="image-component" src={image.src} alt={alt} />
    <style jsx>{`
      img {
        display: block;
        max-width: 100%;
        object-fit: cover;
        object-position: top;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </>
);

export default Image;

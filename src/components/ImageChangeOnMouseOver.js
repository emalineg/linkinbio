import ImageToggleOnMouseOver from './ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  const img1 = '/pfp.jpg';
  const img2 = '/whitebg2.png';

  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg={img1}
        secondaryImg={img2}
        alt='emzra pfp'
      />
      
    </div>
  );
};

export default ImageChangeOnMouseOver;

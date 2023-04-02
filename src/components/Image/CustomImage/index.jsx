import { SpinnerGrow } from "@/components";
import { useState } from "react";
import { Image, WrapImage } from "./styled-components";

const CustomImage = ({
  imageClass = "imageClass",
  wrapImgClass = "wrapImgClass",
  src,
  alt = "image",
  title = "",
  color = "info",
  imgWidth = "100%",
  wrapDisplay,
  wrapJustify,
  wrapAlignItems
}) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <WrapImage
      className={wrapImgClass}
      wrapDisplay={wrapDisplay}
      wrapJustify={wrapJustify}
      wrapAlignItems={wrapAlignItems}
    >
      {loadingImage && <SpinnerGrow color={color} />}
      <Image
        className={imageClass}
        title={title}
        src={src}
        alt={alt}
        loadingImage={loadingImage}
        width={imgWidth}
        onLoad={() => setLoadingImage(false)}
      />
    </WrapImage>
  );
};
export default CustomImage;

import { SpinnerGrow } from "@/components";
import { useState } from "react";
import { Image } from "./styled-components";

const CustomImage = ({
  imageClass = "imageClass",
  wrapImgClass = "wrapImgClass",
  src,
  alt = "image",
  title = "",
  color = "info",
  imgWidth = "100%"
}) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <div className={wrapImgClass}>
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
    </div>
  );
};
export default CustomImage;

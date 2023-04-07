import { dictionary } from "@/schemas";
import { CustomButton, CustomImage } from "..";

const CustomButtonAndImage = ({
  buttonMargin = "",
  onClick,
  color,
  title,
  imgClass,
  src
}) => {
  return (
    <CustomButton
      buttonClass={`p-0 d-flex justify-content-center ${buttonMargin}`}
      onClick={onClick}
      color={color}
      text={
        <CustomImage
          title={dictionary(title)}
          wrapImgClass={imgClass}
          src={src}
        />
      }
    />
  );
};
export default CustomButtonAndImage;

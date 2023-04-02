import { CustomButton, CustomImage } from "@/components";
import { dictionary } from "@/schemas";

const HeaderClientWallet = ({ children }) =>
  children.map((element, idx) => (
    <span key={idx}>
      {element.type ? (
        element
      ) : (
        <CustomButton
          buttonClass={`p-0 d-flex justify-content-center ${element.buttonMargin}`}
          onClick={element.onClick}
          color={element.color}
          text={
            <CustomImage
              title={dictionary(element.title)}
              wrapImgClass={element.imgClass}
              src={element.src}
            />
          }
        />
      )}
    </span>
  ));

export default HeaderClientWallet;

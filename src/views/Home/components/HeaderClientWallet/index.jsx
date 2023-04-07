import { CustomButtonAndImage } from "@/components";

const HeaderClientWallet = ({ children }) =>
  children.map((element, idx) => (
    <span key={idx}>
      {element.type ? (
        element
      ) : (
        <CustomButtonAndImage
          buttonMargin={element.buttonMargin}
          onClick={element.onClick}
          color={element.color}
          title={element.title}
          imgClass={element.imgClass}
          src={element.src}
        />
      )}
    </span>
  ));

export default HeaderClientWallet;

import { routes } from "@/models";
import { imagesSrc } from "@/schemas";

import { CustomImage, LinkReactRouter } from "..";
import { WrapBackToHome } from "./styled-components";

const BackToHome = () => {
  return (
    <WrapBackToHome className='d-flex col col-8 col-sm-3'>
      <CustomImage
        src={imagesSrc.arrowLeft}
        wrapImgClass='wrapImgClass col col-1'
      />
      <LinkReactRouter
        linkClass='px-1'
        to={routes.HOME}
        borderRadius='8px'
        border='none'
      />
    </WrapBackToHome>
  );
};
export default BackToHome;

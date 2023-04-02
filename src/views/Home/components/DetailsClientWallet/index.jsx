import { dictionary } from "@/schemas";
import { SubtitleText } from "@/styled-components";

const DetailsClientWallet = ({ children }) => {
  return children.map(({ text, detail }) => (
    <div key={text}>
      <SubtitleText className='SubtitleText text-center'>
        {dictionary(text)}:
      </SubtitleText>
      <SubtitleText className='SubtitleText text-center'>{detail}</SubtitleText>
    </div>
  ));
};
export default DetailsClientWallet;

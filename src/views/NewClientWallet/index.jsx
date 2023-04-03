import { Card } from "@/components";
import { dictionary } from "@/schemas";
import { TitleText } from "@/styled-components";
import { Form } from "./components";

const NewClientWallet = () => {
  return (
    <Card>
      <TitleText className='text-center text-sm-start'>
        {dictionary("createNewWallet")}
      </TitleText>
      <Form />
    </Card>
  );
};
export default NewClientWallet;

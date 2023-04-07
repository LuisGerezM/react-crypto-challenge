import { CustomAlertMsg } from "./styled-components/AlertMsg.styled";

const AlertMsg = ({ text, alertClass = "col col-11 col-sm-6" }) => {
  return <CustomAlertMsg className={alertClass}>{text}</CustomAlertMsg>;
};
export default AlertMsg;

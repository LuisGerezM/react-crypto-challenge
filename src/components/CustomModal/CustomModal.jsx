import { dictionary } from "@/schemas";
import { Modal } from "react-bootstrap";
import { CustomButton } from "..";

const CustomModal = ({ children, show, onHide }) => {
  return (
    <Modal
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      show={show}
      onHide={onHide}
    >
      {children}
      <Modal.Footer>
        <CustomButton
          text={dictionary("close")}
          onClick={onHide}
          buttonClass='col col-5 col-sm-5  col-lg-5'
          color='red'
        />
      </Modal.Footer>
    </Modal>
  );
};
export default CustomModal;

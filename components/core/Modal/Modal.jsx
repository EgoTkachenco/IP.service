import styled from 'styled-components'
import Icon from '../Icon'

const Modal = ({ children, onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Icon
          icon="close"
          size="30px"
          onClick={onClose}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        />
        <ModalContentInner>{children}</ModalContentInner>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7, 22, 37, 0.05);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  background: #ffffff;
  box-shadow: 10px 10.88px 30.07px rgba(7, 22, 37, 0.1);
  border-radius: 20px;
  position: relative;
`
const ModalContentInner = styled.div`
  padding: 50px;
  width: 400px;
`

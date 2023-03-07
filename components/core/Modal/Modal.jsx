import styled from 'styled-components'
import Icon from '../Icon'
import { useMediaQuery } from '@mantine/hooks'
import Animation from '@/components/reusable/Animation'

const Modal = ({ children, onClose, isIllustration = false }) => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  return (
    <ModalWrapper>
      <Animation width={isMobile ? null : 'auto'}>
        <ModalContent>
          <Icon
            icon="close"
            size="30px"
            onClick={onClose}
            color={isIllustration ? 'white' : 'text'}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 10,
            }}
          />
          <ModalContentInner>{children}</ModalContentInner>

          {isIllustration && (
            <ModalIllustration>
              <img
                src={
                  isMobile
                    ? '/modal-illustration-mobile.png'
                    : '/modal-illustration.png'
                }
              />
            </ModalIllustration>
          )}
        </ModalContent>
      </Animation>
    </ModalWrapper>
  )
}

export default Modal

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7, 22, 37, 0.05);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: #ffffff;
  box-shadow: 10px 10.88px 30.07px rgba(7, 22, 37, 0.1);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1140px) {
    flex-direction: column-reverse;
    border-radius: 0;
    width: 90%;
    max-width: 375px;
    margin: auto;
    max-height: calc((var(--vh, 1vh) * 100) - 16px);
  }
`
const ModalContentInner = styled.div`
  padding: 50px;
  width: 400px;

  @media (max-width: 1140px) {
    padding: 24px;
    width: 100%;
    overflow: auto;
  }
`

const ModalIllustration = styled.div`
  position: relative;
  width: 400px;
  min-height: 632px;
  align-self: stretch;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1140px) {
    width: 100%;
    height: 140px;
    min-height: 140px;
  }
`

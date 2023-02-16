import styled from 'styled-components'
import Icon from '../Icon'
import { useMediaQuery } from '@mantine/hooks'
import PageChangeAnimation from '@/components/reusable/PageChangeAnimation'

const Modal = ({ children, onClose, isIllustration = false }) => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  const showIllustration = isIllustration && !isMobile

  return (
    <ModalWrapper>
      <PageChangeAnimation>
        <ModalContent>
          <Icon
            icon="close"
            size="30px"
            onClick={onClose}
            color={showIllustration ? 'white' : 'text'}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 10,
            }}
          />
          <ModalContentInner>{children}</ModalContentInner>

          {showIllustration && (
            <ModalIllustration>
              <img src="/modal-illustration.png" />
            </ModalIllustration>
          )}
        </ModalContent>
      </PageChangeAnimation>
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
`

const ModalContent = styled.div`
  background: #ffffff;
  box-shadow: 10px 10.88px 30.07px rgba(7, 22, 37, 0.1);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
`
const ModalContentInner = styled.div`
  padding: 50px;
  width: 400px;
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
`

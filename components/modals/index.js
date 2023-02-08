import { useEffect, useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import ForgetPasswordModal from './ForgetPasswordModal'
import ResetPasswordModal from './ResetPasswordModal'

const Modals = () => {
  const { modal, openModal } = useContext(ModalContext)

  let modalComponent
  switch (modal) {
    case 'sign-in':
      modalComponent = (
        <SignInModal
          onRegistration={() => openModal('sign-up')}
          onForget={() => openModal('forget-password')}
          onClose={() => openModal(null)}
        />
      )
      break
    case 'sign-up':
      modalComponent = (
        <SignUpModal
          onLogin={() => openModal('sign-in')}
          onClose={() => openModal(null)}
        />
      )
      break
    case 'forget-password':
      modalComponent = <ForgetPasswordModal onClose={() => openModal(null)} />
      break
    case 'reset-password':
      modalComponent = <ResetPasswordModal onClose={() => openModal(null)} />
      break
    default:
      break
  }
  useEffect(() => {
    if (modalComponent) document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [modalComponent])

  return modalComponent
}

export default Modals

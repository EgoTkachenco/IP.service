import { useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import { Flex, Button } from '@/core'
import styled from 'styled-components'

const AuthorizationButtons = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <Wrapper>
      <Button size="medium" onClick={() => openModal('sign-up')}>
        Sign Up
      </Button>
      <Button
        size="medium"
        text
        color="dark"
        onClick={() => openModal('sign-in')}
      >
        Login
      </Button>
    </Wrapper>
  )
}

export default AuthorizationButtons

const Wrapper = styled(Flex)`
  gap: 10px;
  align-items: center;

  & > * {
    width: 110px;
  }
  @media (max-width: 1140px) {
    width: 100%;
    margin: 32px 0;
    & > * {
      width: 100%;
    }
  }
`

import { Card, H3, Flex, Button } from '@/core'
import { useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import Link from 'next/link'
import routes from '@/constants/routes'
import styled from 'styled-components'

const GetStarted = () => {
  const { openModal } = useContext(ModalContext)

  return (
    <WrapperCard color="dark">
      <H3 color="white">Get started with IP.Service</H3>

      <ButtonsWrapper flex="1">
        <Button onClick={() => openModal('sign-up')}>
          Register free account
        </Button>
        <Link href={routes.contact}>
          <Button color="white" outline>
            Contact sales
          </Button>
        </Link>
      </ButtonsWrapper>
    </WrapperCard>
  )
}

export default GetStarted

const WrapperCard = styled(Card)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 40px;
    padding: 24px;

    H3 {
      font-weight: 700;
      font-size: 20px;
    }
  }
`

const ButtonsWrapper = styled(Flex)`
  gap: 30px;
  width: 500px;

  @media (max-width: 1140px) {
    flex-direction: column-reverse;
    gap: 8px;
    width: 100%;
    align-items: stretch;

    & > * {
      flex: auto;
    }
  }
`

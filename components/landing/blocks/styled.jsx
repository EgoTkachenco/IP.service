import { Card, Flex, Icon, Text, H1, H5, Button } from '@/core'
import Image from 'next/image'
import styled from 'styled-components'
import { useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import Link from 'next/link'
import routes from '@/constants/routes'

export const AdvantagesItem = ({ icon, text }) => (
  <Flex gap="10px">
    <Icon icon={icon} color="primary" size="24px" />
    <Text weight={700}>{text}</Text>
  </Flex>
)

export const AdvantagesIllustration = ({ count, small }) => (
  <AdvantagesImage small>
    <Image
      src="/advantages_bg.png"
      alt="advantages back"
      className="advantages-image__back"
      fill
      loading="lazy"
    />
    <AdvantagesImageTitle>{count}</AdvantagesImageTitle>
    <AdvantagesImageText color="white">
      Billion API requests last month
    </AdvantagesImageText>
  </AdvantagesImage>
)

const AdvantagesImage = styled.div`
  position: relative;
  width: ${({ small }) => (small ? '380px' : '450px')};
  height: ${({ small }) => (small ? '380px' : '450px')};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  border-radius: 50%;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(15.0667px);
  }

  & > * {
    position: relative;
    z-index: 10;
  }

  @media (max-width: 1140px) {
    width: 100%;
  }

  .advantages-image__back {
    z-index: 0;
  }
`

const AdvantagesImageTitle = styled.div`
  font-weight: 800;
  font-size: 200px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
`

const AdvantagesImageText = styled(Text)`
  margin-bottom: -6px;
`

export const StatisticCard = ({ title, description }) => (
  <StatisticWrapper color="white">
    <H1 color="primary">{title}</H1>
    <Text weight={600}>{description}</Text>
  </StatisticWrapper>
)

const StatisticWrapper = styled(Card)`
  gap: 4px;
  align-items: center;
  transition: all 0.3s;
  cursor: default;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1140px) {
    width: 100%;
    max-width: 250px;
  }
`

export const UseCase = ({ text }) => (
  <UseCaseCard color="white">
    <Icon icon="use-case" size="50px" color="primary" />
    <H5 align="center">{text}</H5>
  </UseCaseCard>
)

const UseCaseCard = styled(Card)`
  padding: 47px 72px;
  gap: 15px;
  align-items: center;

  @media (max-width: 1140px) {
    flex: 1 1 calc((100% - 32px) / 2);
  }

  @media (max-width: 700px) {
    flex: 1 1 100%;
  }
`

export const SignInContactButtons = ({
  direction = 'row',
  contactColor = 'dark',
}) => {
  const { openModal } = useContext(ModalContext)
  return (
    <ButtonsContainer direction={direction}>
      <Button onClick={() => openModal('sign-up')}>
        Sign up for free <Icon icon="user-add" color="white" size="20px" />
      </Button>
      <Link href={routes.contact}>
        <Button color={contactColor} outline>
          Contact Us
          <Icon icon="phone" size="20px" />
        </Button>
      </Link>
    </ButtonsContainer>
  )
}

const ButtonsContainer = styled(Flex)`
  align-items: stretch;
  gap: 20px;
  button {
    width: 211px;
    height: 55px;
  }

  @media (max-width: 1140px) {
    button {
      height: 50px;
      width: ${({ direction }) => (direction === 'column' ? '100%' : 'auto')};
    }
  }
`

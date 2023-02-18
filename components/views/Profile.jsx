import { useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import { H4, Flex, Card, Input, Label, Button, Link } from '@/core'
import styled from 'styled-components'
import { TextField } from '@/components/reusable/FormFields'

const Profile = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <Wrapper direction="column">
      <H4 color="dark">Profile</H4>
      <ProfileCard color="white" align="strench">
        <TextField label="Name" name="name" />
        <TextField label="Last Name" name="lastName" />
        <TextField label="Email address" name="email" />

        <ProfileCardBottom justify="space-between" align="center">
          <Button size="medium">Save</Button>
          <Link caption onClick={() => openModal('reset-password')}>
            Reset password
          </Link>
        </ProfileCardBottom>
      </ProfileCard>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled(Flex)`
  gap: 30px;
  @media (max-width: 1140px) {
    gap: 16px;
  }
`

const ProfileCard = styled(Card)`
  width: 525px;
  gap: 30px;
  @media (max-width: 1140px) {
    padding: 24px;
    width: 100%;
    gap: 16px;
  }
`
const ProfileCardBottom = styled(Flex)`
  justify-content: space-between;
  align-items: center;

  & :first-child {
    width: 200px;
    @media (max-width: 1140px) {
      width: 100%;
    }
  }

  @media (max-width: 1140px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }
`

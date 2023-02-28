import { useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import { H4, Flex, Card, Input, Label, Button, Link } from '@/core'
import styled from 'styled-components'
import { TextField } from '@/components/reusable/FormFields'
import { observer } from 'mobx-react-lite'
import AuthStore from '@/store/AuthStore'
import { useForm } from '@mantine/form'

const Profile = observer(() => {
  const { openModal } = useContext(ModalContext)
  const { user, updateProfile, isFetch } = AuthStore
  const form = useForm({
    initialValues: {
      first_name: user?.first_name || '',
      last_name: user?.last_name || '',
      email: user?.email || '',
    },

    validate: {
      first_name: (value) => {
        // if (!value) return 'Password required'
        return null
      },
      last_name: (value) => {
        // if (!value) return 'Password required'
        return null
      },
      email: (value) => {
        if (!value) return 'Email required'
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email'
        return null
      },
    },
  })
  const onSubmit = form.onSubmit((values) => {
    updateProfile(values).catch((error) => {
      if (error.errors) form.setErrors(error.errors)
    })
  })
  return (
    <Wrapper direction="column">
      <H4 color="dark">Profile</H4>
      <ProfileCard color="white" align="strench">
        <TextField
          label="Name"
          name="name"
          {...form.getInputProps('first_name')}
        />
        <TextField
          label="Last Name"
          name="lastName"
          {...form.getInputProps('last_name')}
        />
        <TextField
          label="Email address"
          name="email"
          {...form.getInputProps('email')}
        />
        <ProfileCardBottom justify="space-between" align="center">
          <Button size="medium" onClick={onSubmit} disabled={isFetch}>
            Save
          </Button>
          <Link caption onClick={() => openModal('reset-password')}>
            Reset password
          </Link>
        </ProfileCardBottom>
      </ProfileCard>
    </Wrapper>
  )
})

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

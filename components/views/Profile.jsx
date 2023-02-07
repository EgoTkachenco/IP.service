import { useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import { H4, Flex, Card, Input, Label, Button, Link } from '@/core'

const Profile = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <Flex direction="column" gap="30px">
      <H4 color="dark">Profile</H4>
      <Card color="white" gap="30px" width="525px" align="strench">
        <Flex direction="column" gap="3px">
          <Label htmlFor="name" color="light-grey" caption>
            Name
          </Label>
          <Input id="name" value="George" />
        </Flex>
        <Flex direction="column" gap="3px">
          <Label htmlFor="lastName" color="light-grey" caption>
            Last Name
          </Label>
          <Input id="lastName" value="Johnson" />
        </Flex>
        <Flex direction="column" gap="3px">
          <Label htmlFor="email" color="light-grey" caption>
            Email address
          </Label>
          <Input id="email" type="email" value="dond6026@gmail.com" />
        </Flex>

        <Flex justify="space-between" align="center">
          <Button size="medium" width="200px">
            Save
          </Button>
          <Link caption onClick={() => openModal('reset-password')}>
            Reset password
          </Link>
        </Flex>
      </Card>
    </Flex>
  )
}

export default Profile

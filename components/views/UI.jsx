import {
  Card,
  Flex,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  Caption,
  Button,
  Icon,
  Input,
} from '@/core'

const UI = () => {
  return (
    <Flex direction="column" align="center" p="32px">
      <Card gap="32px" bordered width="auto">
        <H1>H1 Title Text</H1>
        <H2>H2 Title Text</H2>
        <H3>H3 Title Text</H3>
        <H4>H4 Title Text</H4>
        <H5>H5 Title Text</H5>
        <H6>H6 Title Text</H6>
        <Text>Default Text</Text>
        <Caption>Caption Text</Caption>
      </Card>

      <Card gap="32px" bordered width="auto">
        <Button>
          Sign up for free <Icon icon="user-add" color="white" size="20" />
        </Button>
        <Button color="dark" outline>
          Click
          <Icon icon="phone" size="20" />
        </Button>
        <Button size="small" width="auto">
          Show Docs
        </Button>
      </Card>

      <Card gap="32px" width="300px">
        <Input variant="dark" />
        <Input variant="light" />
        <Input />
      </Card>
    </Flex>
  )
}

export default UI

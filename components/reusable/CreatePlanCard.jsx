import { useRouter } from 'next/router'
import { Card, H3, Flex, Text, Button } from '@/core'
import styled from 'styled-components'
import routes from '@/constants/routes'

const CreatePlanCard = () => {
  const router = useRouter()
  const onClick = () =>
    router.push({ pathname: routes.pricing, query: { tab: 'custom' } })
  return (
    <CreateCard color="white">
      <Content>
        <H3 color="dark">Create your plan</H3>
        <Text>
          The services that are not included in our plans you can purchase via
          our custom plan feature.
        </Text>
      </Content>
      <Button width="220px" onClick={onClick}>
        Get plan
      </Button>
    </CreateCard>
  )
}

export default CreatePlanCard

const CreateCard = styled(Card)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px;
  @media (max-width: 1140px) {
    padding: 30px;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
  }
`
const Content = styled(Flex)`
  flex-direction: column;
  max-width: 50%;
  gap: 20px;
  @media (max-width: 1140px) {
    align-items: center;
    max-width: unset;
    width: 100%;
    ${Text} {
      text-align: center;
    }
  }
`

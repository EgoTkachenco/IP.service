import { useEffect } from 'react'
import { H1, H4, Flex, Card, Icon, Caption } from '@/core'
import styled from 'styled-components'
import Whitelists from '@/components/reusable/Whitelists'
import { observer } from 'mobx-react-lite'
import TokenStore from '@/store/TokenStore'
import TokenPreview from '../reusable/TokenPreview'

const Token = observer(() => {
  const {
    token,
    white_domain_list,
    white_ip_list,
    isFetch,
    loadToken,
    updateWhitelist,
  } = TokenStore

  useEffect(() => {
    if (!token) loadToken()
  }, [])

  if (!token) return ''

  return (
    <>
      <Flex direction="column" gap="10px">
        <Title color="dark">Access Token</Title>
        <TokenPreview token={token} />
        <Caption>is your access token</Caption>
      </Flex>
      <SecondTitle color="dark">Token Security</SecondTitle>
      <Whitelists
        white_domain_list={white_domain_list}
        white_ip_list={white_ip_list}
        onChange={(white_domain_list, white_ip_list) =>
          updateWhitelist(white_domain_list, white_ip_list)
        }
        disabled={isFetch}
      />
    </>
  )
})

export default Token

const Title = styled(H4)`
  margin-bottom: 20px;
`

const SecondTitle = styled(H4)`
  margin: 65px 0 30px;
`
